import { useState } from 'react'
import { hostServer } from '../../App'
import { useFindEmailQuery } from '../../graphql/generated'
import { Link } from 'react-router-dom'
import { ConfirmToken } from './ConfirmToken'

interface Props {}

export function Form(props: Props) {
  const [name, setName] = useState('')
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState('')
  const [token, setToken] = useState('')
  const [verifyToken, setVerifyToken] = useState(false)
  const [loading, setLoading] = useState(false)

  const { refetch: findEmail } = useFindEmailQuery({
    variables: { email },
  })

  async function handleSendToken(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setLoading(true)
    const { data }: any = await findEmail({ email: email })
    if (data.subscriber) {
      alert('Email já existente')
      setLoading(false)
    } else {
      fetch(`${hostServer}/sendEmailVerification`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          email,
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          setToken(data.token)
          setLoading(false)
          setVerifyToken(true)
        })
        .catch((error) => console.log(error))
    }
  }

  const confirmTokenProps = {
    name,
    email,
    password,
    token,
    setVerifyToken,
  }

  const inputNameProps = {
    className: style.input,
    type: 'text',
    required: true,
    placeholder: 'Seu nome completo',
    onChange: (event: React.ChangeEvent<HTMLInputElement>) =>
      setName(event.target.value),
  }

  const inputEmailProps = {
    className: style.input,
    type: 'email',
    required: true,
    placeholder: 'Digite seu email',
    onChange: (event: React.ChangeEvent<HTMLInputElement>) =>
      setEmail(event.target.value),
  }

  const inputPasswordProps = {
    className: style.input,
    type: 'password',
    required: true,
    placeholder: 'Digite uma senha',
    onChange: (event: React.ChangeEvent<HTMLInputElement>) =>
      setPassword(event.target.value),
  }

  return (
    <div className={style.wrapper}>
      {!verifyToken ? (
        <>
          <strong className={style.title}>Inscreva-se gratuitamente</strong>
          <span className={style.span}>
            Já possui uma conta?{' '}
            <Link to="/" className="underline">
              entre agora!
            </Link>
          </span>
          <form onSubmit={(e) => handleSendToken(e)} className={style.form}>
            <input {...inputNameProps} />
            <input {...inputEmailProps} />
            <input {...inputPasswordProps} />
            <button type="submit" className={style.submitButton}>
              {loading ? 'Enviando...' : 'Confirmar email'}
            </button>
          </form>
        </>
      ) : (
        <ConfirmToken {...confirmTokenProps} />
      )}
    </div>
  )
}

const style = {
  wrapper: `p-8 max-w-[380px] h-full max-h-[406px] w-full bg-gray-700 border border-gray-500 rounded`,
  title: `text-2xl block`,
  span: `mb-6 inline-block text-gray-400`,
  form: `flex flex-col gap-2 w-full z-50`,
  input: `bg-gray-900 rounded px-5 h-14 z-50 outline-none focus:ring-2 ring-emerald-500`,
  submitButton: `mt-4 bg-green-500 z-10 uppercase py-4 rounded font-bold text-sm hover:bg-green-700 transition-colors disabled:opacity-50`,
}
