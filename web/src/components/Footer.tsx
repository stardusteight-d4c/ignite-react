import LogoRocketseat from './LogoRocketseat'

export function Footer() {
  return (
    <footer className={style.wrapper}>
      <span className={style.logoSpan}>
        <a
          href="https://app.rocketseat.com.br/"
          target="_blank"
          className="cursor-pointer"
        >
          <LogoRocketseat />
        </a>
        <p className={style.reservedRights}>
          Rocketseat - Todos os direitos reservados
        </p>
      </span>
      <span className={style.privacyPolicies}>Políticas de privacidade</span>
    </footer>
  )
}

const style = {
  wrapper: `w-full mt-auto bg-black z-20 md:p-7 md:flex justify-between items-center p-5 block text-center`,
  logoSpan: `block md:flex items-center justify-center`,
  reservedRights: `md:ml-6 text-gray-300 cursor-pointer ml-0 mb-6 md:mb-0`,
  privacyPolicies: `text-gray-300 cursor-pointer mb-6 md:mb-0`,
}
