import LogoRocketseat from './LogoRocketseat'

export function Footer() {
  return (
    <footer className="w-full bg-black z-20 md:p-7 md:flex justify-between items-center p-5 block text-center">
      <span className="block md:flex items-center justify-center">
        <a
          href="https://app.rocketseat.com.br/"
          target="_blank"
          className="cursor-pointer"
        >
          <LogoRocketseat />
        </a>
        <p className="md:ml-6 text-gray-300 cursor-pointer ml-0 mb-6 md:mb-0">
          Rocketseat - Todos os direitos reservados
        </p>
      </span>
      <span className="text-gray-300 cursor-pointer mb-6 md:mb-0">
        Políticas de privacidade
      </span>
    </footer>
  )
}
