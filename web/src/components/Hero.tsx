import { Logo } from './Logo'

interface Props {}

export function Hero(props: Props) {
  return (
    <div className={style.wrapper}>
      <Logo />
      <h1 className={style.title}>
        Construa uma{' '}
        <strong className={style.strong}>aplicação completa</strong>, do zero,
        com <strong className={style.strong}>React</strong>
      </h1>
      <p className={style.paragraph}>
        Em apenas uma semana você vai dominar na prática uma das tecnologias
        mais utilizadas e com alta demanda para acessar as melhores
        oportunidades do mercado.
      </p>
    </div>
  )
}

const style = {
  wrapper: `max-w-[640px] md:px-0 px-4 pb-5`,
  title: `mt-8 text-[2.5rem] leading-tight`,
  strong: `text-blue-500`,
  paragraph: `mt-4 text-gray-200 leading-relaxed md:text-xl`,
}
