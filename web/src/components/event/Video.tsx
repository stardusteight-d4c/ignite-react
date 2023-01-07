import { DefaultUi, Player, Youtube } from '@vime/react'

import '@vime/core/themes/default.css'
import { useGetLessonBySlugQuery } from '../../graphql/generated'
import { isPast } from 'date-fns'

interface VideoProps {
  lessonSlug: string
}

export function Video(props: VideoProps) {
  const { data } = useGetLessonBySlugQuery({
    variables: {
      slug: props.lessonSlug,
    },
    fetchPolicy: 'no-cache',
  })

  if (!data || !data.lesson) {
    return (
      <div className={style.wrapper}>
        <p>Carregando...</p>
      </div>
    )
  }

  const isLessonAvailable = isPast(new Date(data.lesson.availableAt))

  if (!isLessonAvailable) {
    return (
      <div className={style.lessonNotAvailable}>Aula ainda não disponível!</div>
    )
  }

  return (
    <div className={style.wrapper}>
      <div className={style.container}>
        <div className={style.content}>
          <Player>
            <Youtube videoId={data.lesson.videoId} />
            <DefaultUi />
          </Player>
        </div>
      </div>
    </div>
  )
}

const style = {
  wrapper: `flex-1`,
  container: `bg-gray-700 flex justify-center`,
  content: `w-full rounded-l-xl rounded-r-xl md:rounded-r-none border border-r-0 border-gray-600 min-h-full max-h-[524px] overflow-hidden`,
  lessonNotAvailable: `flex-1 rounded-l-xl border border-gray-600 flex items-center justify-center`,
}
