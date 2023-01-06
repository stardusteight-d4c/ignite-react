import { useParams } from 'react-router-dom'
import { Description } from '../components/Description'
import { Footer } from '../components/Footer'
import { Header } from '../components/Header'
import { Sidebar } from '../components/Sidebar'
import { Video } from '../components/Video'
import { Logo } from "../components/Logo";

export function Event() {
  const { slug } = useParams<{ slug: string }>()

  return (
    <div className="flex overflow-x-hidden flex-col min-h-screen">
      <Header />
      <main>
        <div className="inline-block md:flex flex-1 w-full mt-4 max-w-7xl mx-auto">
          {slug ? (
            <Video lessonSlug={slug} />
          ) : (
            <div className="hidden md:flex flex-1 items-center justify-center rounded-l-xl border border-gray-600">
              <Logo />
            </div>
          )}
          <Sidebar />
        </div>
        <div className="w-full mt-2 max-w-7xl mx-auto">
          {slug && <Description lessonSlug={slug} />}
        </div>
      </main>
      <div className="mt-8 md:mt-auto bottom-0 w-[100vw] relative">
        <Footer />
      </div>
    </div>
  )
}
