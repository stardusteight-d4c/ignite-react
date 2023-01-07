import { useParams } from 'react-router-dom'
import { Description } from '../components/Description'
import { Footer } from '../components/Footer'
import { Header } from '../components/Header'
import { Sidebar } from '../components/Sidebar'
import { Video } from '../components/Video'
import { Logo } from '../components/Logo'

export function Event() {
  const { slug } = useParams<{ slug: string }>()

  return (
    <div className={style.wrapper}>
      <Header />
      <main>
        <div className={style.contentContainer}>
          {slug ? (
            <Video lessonSlug={slug} />
          ) : (
            <div className={style.lessonNotSelected}>
              <Logo />
            </div>
          )}
          <Sidebar />
        </div>
        <div className={style.lessonDescription}>
          {slug && <Description lessonSlug={slug} />}
        </div>
      </main>
      <Footer />
    </div>
  )
}

const style = {
  wrapper: `flex overflow-x-hidden flex-col min-h-screen`,
  contentContainer: `inline-block md:flex flex-1 w-full mt-4 max-w-7xl mx-auto`,
  lessonNotSelected: `hidden md:flex flex-1 items-center justify-center rounded-l-xl border border-gray-600`,
  lessonDescription: `w-full max-w-7xl mx-auto`,
}
