import LogoRocketseat from './LogoRocketseat'

export function Footer() {
  return (
    <footer className="w-full bg-black z-20 p-7 flex justify-between items-center md:p-5 md:block md:text-center">
      <span className='flex items-center md:block'>
        <a href="https://app.rocketseat.com.br/" target="_blank" className="cursor-pointer">
          <LogoRocketseat />
        </a>
        <p className='ml-6 text-gray-300 cursor-pointer md:ml-0 md:mb-6'>Rocketseat - Todos os direitos reservados</p>
      </span>
      <span className='text-gray-300 cursor-pointer md:mb-6'>Políticas de privacidade</span>
    </footer>
  )
}
