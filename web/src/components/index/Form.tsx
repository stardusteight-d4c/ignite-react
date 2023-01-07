import { useState, FormEvent } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import bcryptjs from 'bcryptjs'
import { useFindUserQuery } from '../../graphql/generated'
import { hostServer } from '../../App'

interface Props {}

export function Form(props: Props) {
  const navigate = useNavigate()
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)

  const { refetch: findUser } = useFindUserQuery({
    variables: { email },
  })

  async function handleLogin(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setLoading(true)
    const { data }: any = await findUser({
      email,
    })
    if (data.subscribers[0]) {
      const isValidPassword = bcryptjs.compareSync(
        password,
        data.subscribers[0].password
      )

      if (isValidPassword) {
        const { session } = await fetch(`${hostServer}/generateSession`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            email,
            password,
          }),
        }).then((res) => res.json())
        localStorage.setItem('session', session)
        navigate('/event')
      } else {
        alert('Email ou senha incorretos')
      }
    } else {
      alert('Email ou senha incorretos')
    }
    setLoading(false)
  }

  const emailInputProps = {
    className: style.input,
    type: 'email',
    required: true,
    placeholder: 'Digite seu email',
    onChange: (event: React.ChangeEvent<HTMLInputElement>) =>
      setEmail(event.target.value),
  }

  const passwordInputProps = {
    className: style.input,
    type: 'password',
    required: true,
    placeholder: 'Digite sua senha',
    onChange: (event: React.ChangeEvent<HTMLInputElement>) =>
      setPassword(event.target.value),
  }

  return (
    <div className={style.wrapper}>
      <div className={style.container}>
        <h2 className={style.title}>Entre na Plataforma</h2>
        <span className={style.span}>
          Ou{' '}
          <Link to="/subscribe" className="underline">
            inscreva-se agora!
          </Link>
        </span>
        <form onSubmit={(e) => handleLogin(e)} className={style.form}>
          <input {...emailInputProps} />
          <input {...passwordInputProps} />
          <button type="submit" className={style.submitButton}>
            {loading ? 'Carregando...' : 'Entrar'}
          </button>
        </form>
      </div>
    </div>
  )
}

const style = {
  wrapper: `min-h-[406px] max-h-[406px] max-w-[380px] w-full`,
  container: `p-8 mt-8 md:mt-0 max-w-[380px] w-full bg-gray-700 border border-gray-500 rounded`,
  title: `text-2xl block`,
  span: `mb-6 inline-block text-gray-400`,
  form: `flex flex-col gap-2 w-full z-50`,
  input: `bg-gray-900 rounded px-5 h-14 z-50 outline-none focus:ring-2 ring-emerald-500`,
  submitButton: `mt-4 bg-green-500 z-10 uppercase py-4 rounded font-bold text-sm hover:bg-green-700 transition-colors disabled:opacity-50`,
}
