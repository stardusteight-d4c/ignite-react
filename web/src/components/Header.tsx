import { Logo } from './Logo'

export function Header() {
  return (
    <header className={style.wrapper}>
      <Logo />
    </header>
  )
}

const style = {
  wrapper: `w-full py-5 flex items-center justify-center bg-gray-700 border-b border-gray-600`,
}
