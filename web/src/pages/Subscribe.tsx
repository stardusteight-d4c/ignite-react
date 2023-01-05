import { gql, useQuery } from '@apollo/client'
import { ArrowLeft } from 'phosphor-react'
import { useState, FormEvent } from 'react'
import { useNavigate } from 'react-router-dom'
import { Footer } from '../components/Footer'
import { Logo } from '../components/Logo'
import { useCreateSubscriberMutation } from '../graphql/generated'
import { useFindEmailQuery } from '../graphql/generated'
import reactIcon from '/src/assets/react-icon.svg'

// const FIND_EMAIL = gql`
//   query FindEmail($email: String) {
//     subscriber(where: { email: $email }) {
//       name
//       email
//     }
//   }
// `

export function Subscribe() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState('')
  const [token, setToken] = useState('')
  const [verifyToken, setVerifyToken] = useState(false)

  const [createSubscriber, { loading }] = useCreateSubscriberMutation()
  const { data: emailQuery, refetch: findEmail } = useFindEmailQuery({
    variables: { email },
  })

  console.log('emailQuery', emailQuery)

  async function handleSendToken() {
    await findEmail({ email: email })

    // setVerifyToken(true)
  }

  return (
    <div className="bg-blur relative bg-cover bg-no-repeat flex flex-col items-center h-[100vh] overflow-hidden md:h-auto">
      <img src={reactIcon} className="absolute mt-2 z-0" />

      <div className="w-full max-w-[1100px] z-20 flex items-center justify-between mt-20 mx-auto md:block md:text-center">
        <div className="max-w-[640px] md:px-4 pb-5">
          <Logo />
          <h1 className="mt-8 text-[2.5rem] leading-tight">
            Construa uma{' '}
            <strong className="text-blue-500">aplicação completa</strong>, do
            zero, com <strong className="text-blue-500">React</strong>
          </h1>
          <p className="mt-4 text-gray-200 leading-relaxed md:text-xl">
            Em apenas uma semana você vai dominar na prática uma das tecnologias
            mais utilizadas e com alta demanda para acessar as melhores
            oportunidades do mercado.
          </p>
        </div>

        <div className="p-8 max-w-[380px] w-full bg-gray-700 border border-gray-500 rounded">
          {!verifyToken ? (
            <>
              <strong className="text-2xl mb-6 block">
                Inscreva-se gratuitamente
              </strong>

              <form
                onSubmit={(e) => {
                  e.preventDefault()
                  handleSendToken()
                }}
                className="flex flex-col gap-2 w-full z-50"
              >
                <input
                  className="bg-gray-900 rounded px-5 h-14 z-50 outline-none focus:ring-2 ring-emerald-500"
                  type="text"
                  required
                  placeholder="Seu nome completo"
                  onChange={(event) => setName(event.target.value)}
                />
                <input
                  className="bg-gray-900 rounded px-5 h-14 z-50 outline-none focus:ring-2 ring-emerald-500"
                  type="email"
                  required
                  placeholder="Digite seu email"
                  onChange={(event) => setEmail(event.target.value)}
                />
                <input
                  className="bg-gray-900 rounded px-5 h-14 z-50 outline-none focus:ring-2 ring-emerald-500"
                  type="password"
                  required
                  placeholder="Escolha um senha"
                  onChange={(event) => setPassword(event.target.value)}
                />
                <button
                  className="mt-4 bg-green-500 z-10 uppercase py-4 rounded font-bold text-sm hover:bg-green-700 transition-colors disabled:opacity-50"
                  type="submit"
                  disabled={loading}
                >
                  Confirmar email
                </button>
              </form>
            </>
          ) : (
            <>
              <div className="mb-6">
                <strong className="text-xl block">
                  Token de acesso enviado!
                </strong>
                <span>
                  Verifique:{' '}
                  <strong className="text-emerald-500">{email}</strong>
                </span>
              </div>
              <form
                onSubmit={() => setVerifyToken(true)}
                className="flex max-w-[380px] flex-col gap-2 w-full z-50"
              >
                <input
                  className="bg-gray-900 rounded px-5 h-14 z-50 outline-none focus:ring-2 ring-emerald-500"
                  type="text"
                  value={token}
                  placeholder="Insira o token de acesso"
                  onChange={(event) => setToken(event.target.value)}
                />

                <button
                  className="mt-4 bg-green-500 z-10 uppercase py-4 rounded font-bold text-sm hover:bg-green-700 transition-colors disabled:opacity-50"
                  type="submit"
                  disabled={loading}
                >
                  Garantir minha vaga
                </button>
                <div
                  className="mt-4 flex items-center gap-x-2 mx-auto cursor-pointer text-white"
                  onClick={() => setVerifyToken(false)}
                >
                  <ArrowLeft size={24} />{' '}
                  <span className="text-xl">Voltar</span>
                </div>
              </form>
            </>
          )}
        </div>
      </div>
      <div className="absolute bottom-0 w-[100vw] md:relative">
        <Footer />
      </div>
    </div>
  )
}
