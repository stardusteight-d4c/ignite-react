import { ArrowLeft } from 'phosphor-react'
import { useState } from 'react'
import bcryptjs from 'bcryptjs'
import { hostServer } from '../../App'
import { useCreateSubscriberMutation } from '../../graphql/generated'
import { useNavigate } from 'react-router-dom'

interface Props {
  email: string
  name: string
  password: string
  token: string
  setVerifyToken: React.Dispatch<React.SetStateAction<boolean>>
}

export function ConfirmToken({
  name,
  email,
  password,
  token,
  setVerifyToken,
}: Props) {
  const navigate = useNavigate()
  const [tokenInput, setTokenInput] = useState('')
  const [createSubscriberMutation, { loading }] = useCreateSubscriberMutation()

  async function registerUser(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()

    const isTokenValid = bcryptjs.compareSync(tokenInput, token)
    const encryptedPassword = await bcryptjs.hash(password, 10)
    if (isTokenValid) {
      await createSubscriberMutation({
        variables: {
          name,
          email,
          password: encryptedPassword,
        },
      })
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
      alert('Código de acesso incorreto!')
    }
  }

  const inputToken = {
    className: style.input,
    type: 'text',
    value: tokenInput,
    placeholder: 'Insira o token de acesso',
    onChange: (event: React.ChangeEvent<HTMLInputElement>) =>
      setTokenInput(event.target.value),
  }

  return (
    <>
      <h2 className={style.title}>Token de acesso enviado!</h2>
      Verifique: <strong className={style.email}>{email}</strong>
      <form onSubmit={(e) => registerUser(e)} className={style.form}>
        <input {...inputToken} />
        <button className={style.submitButton} type="submit" disabled={loading}>
          {loading ? 'Verificando...' : 'Garantir minha vaga'}
        </button>
        <div
          className={style.backIconContainer}
          onClick={() => setVerifyToken(false)}
        >
          <ArrowLeft size={24} /> <span className="text-xl">Voltar</span>
        </div>
      </form>
    </>
  )
}

const style = {
  title: `text-xl block`,
  email: `text-emerald-500`,
  form: `flex mt-6 max-w-[380px] flex-col gap-2 w-full z-50`,
  input: `bg-gray-900 rounded px-5 h-14 z-50 outline-none focus:ring-2 ring-emerald-500`,
  submitButton: `mt-4 bg-green-500 z-10 uppercase py-4 rounded font-bold text-sm hover:bg-green-700 transition-colors disabled:opacity-50`,
  backIconContainer: `mt-4 flex items-center gap-x-2 mx-auto cursor-pointer text-white`,
}
