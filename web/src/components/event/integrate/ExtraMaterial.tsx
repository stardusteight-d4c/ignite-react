import { CaretRight, FileArrowDown, Image } from 'phosphor-react'

interface Props {}

export function ExtraMaterial(props: Props) {
  return (
    <div className={style.wrapper}>
      <a href="#" className={style.linkContainer}>
        <div className={style.imgContainer}>
          <FileArrowDown size={40} />
        </div>
        <div className={style.leading}>
          <strong className={style.title}>Material complementar</strong>
          <p className={style.paragraph}>
            Acesse o material complementar para acelerar o seu desenvolvimento
          </p>
        </div>
        <div className={style.iconContainer}>
          <CaretRight size={24} />
        </div>
      </a>

      <a href="#" className={style.linkContainer}>
        <div className={style.imgContainer}>
          <Image size={40} />
        </div>
        <div className={style.leading}>
          <strong className={style.title}>Wallpapers exclusivos</strong>
          <p className={style.paragraph}>
            Baixe wallpapers exclusivos do Ignite Lab e personalize a sua
            máquina
          </p>
        </div>
        <div className={style.iconContainer}>
          <CaretRight size={24} />
        </div>
      </a>
    </div>
  )
}

const style = {
  wrapper: `gap-8 mt-10 hidden md:grid grid-cols-2`,
  linkContainer: `bg-gray-700 rounded overflow-hidden flex items-stretch gap-6 hover:bg-gray-600 transition-colors`,
  imgContainer: `bg-green-700 h-full p-6 flex items-center`,
  leading: `py-6 leading-relaxed`,
  title: `text-2xl`,
  paragraph: `text-sm text-gray-200 mt-2`,
  iconContainer: `h-full p-6 flex items-center`,
}
