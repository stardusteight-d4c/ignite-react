import { ArrowLeft } from 'phosphor-react'
import { useState, FormEvent } from 'react'
import { Footer } from '../components/Footer'
import { Logo } from '../components/Logo'
import reactIcon from '/src/assets/react-icon.svg'
import { Link, useNavigate } from 'react-router-dom'
import bcryptjs from 'bcryptjs'
import { useFindUserQuery } from '../graphql/generated'

export function Index() {
  const navigate = useNavigate()
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)

  const { refetch: findUser, loading: loadingUserQuery } = useFindUserQuery({
    variables: { email },
  })

  async function handleLogin() {
    const { data }: any = await findUser({
      email,
    })
    if (data.subscribers[0]) {
      const isValidPassword = bcryptjs.compareSync(
        password,
        data.subscribers[0].password
      )

      isValidPassword ? 'gerar sesssion token -> armazenar em localStorage -> redirecionar para /event' : 'disparar alert'
    } else {
      alert('Email ou senha incorretos')
    }
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

        <div className="min-h-[406px] max-h-[406px] max-w-[380px] w-full">
          <div className="p-8 max-w-[380px] w-full bg-gray-700 border border-gray-500 rounded">
            <strong className="text-2xl block">Entre na Plataforma</strong>
            <span className="mb-6 inline-block text-gray-400">
              Ou{' '}
              <Link to="/subscribe" className="underline">
                inscreva-se agora!
              </Link>
            </span>
            <form
              onSubmit={(e) => {
                e.preventDefault()
                handleLogin()
              }}
              className="flex flex-col gap-2 w-full z-50"
            >
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
              >
                {loading ? 'Carregando...' : 'Entrar'}
              </button>
            </form>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 w-[100vw] md:relative">
        <Footer />
      </div>
    </div>
  )
}
