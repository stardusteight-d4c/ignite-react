import { useParams } from 'react-router-dom'
import { Footer } from '../components/Footer'
import { Header } from '../components/Header'
import { Sidebar } from '../components/Sidebar'
import { Video } from '../components/Video'

export function Event() {
  const { slug } = useParams<{ slug: string }>()

  return (
    <div className="flex flex-col min-h-screen ">
      <Header />
      <main className="flex flex-1 md:block">
        {slug ? <Video lessonSlug={slug} /> : <div className="flex-1" />}
        <Sidebar />
      </main>
      <div className='w-[calc(100vw-347px)] border-r-[1px] border-gray-500 md:relative md:w-full'>
        <Footer />
      </div>
    </div>
  )
}
