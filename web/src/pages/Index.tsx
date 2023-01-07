import { Footer } from '../components/Footer'
import reactIcon from '/src/assets/react-icon.svg'
import { Hero } from '../components/Hero'
import { Form } from '../components/index/Form'

export function Index() {
  return (
    <div className={style.wrapper}>
      <img src={reactIcon} className={style.backgroundImg} />
      <main className={style.mainContainer}>
        <Hero />
        <Form />
      </main>
      <Footer />
    </div>
  )
}

const style = {
  wrapper: `bg-blur relative bg-cover bg-no-repeat flex flex-col items-center justify-center md:h-[100vh] overflow-hidden h-auto`,
  backgroundImg: `absolute mt-2 z-0`,
  mainContainer: `w-full max-w-[1100px] z-20 block md:flex items-center justify-between mt-14 md:mt-auto mx-auto text-center md:text-start`,
}
