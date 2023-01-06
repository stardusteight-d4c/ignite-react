import { useParams } from 'react-router-dom'
import { Description } from '../components/Description'
import { Footer } from '../components/Footer'
import { Header } from '../components/Header'
import { Sidebar } from '../components/Sidebar'
import { Video } from '../components/Video'

export function Event() {
  const { slug } = useParams<{ slug: string }>()

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main>
        <div className="flex flex-1 md:block w-full mt-4 max-w-7xl mx-auto">
          {slug ? <Video lessonSlug={slug} /> : <div className="flex-1" />}
          <Sidebar />
        </div>
        <div className=" w-full mt-4 max-w-7xl mx-auto">
          {slug && <Description lessonSlug={slug} />}
        </div>
      </main>
      <div className="w-screen md:relative md:w-full">
        <Footer />
      </div>
    </div>
  )
}
