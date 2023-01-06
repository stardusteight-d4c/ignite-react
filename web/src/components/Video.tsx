import { DefaultUi, Player, Youtube } from '@vime/react'
import {
  CaretRight,
  DiscordLogo,
  FileArrowDown,
  Image,
  Lightning,
} from 'phosphor-react'

import '@vime/core/themes/default.css'
import { useGetLessonBySlugQuery } from '../graphql/generated'

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
      <div className="flex-1">
        <p>Carregando...</p>
      </div>
    )
  }

  return (
    <div className="flex-1">
      <div className="bg-gray-700 flex justify-center">
        <div className="w-full rounded-l-xl border border-r-0 border-gray-600 min-h-full max-h-[524px] overflow-hidden">
          <Player>
            <Youtube videoId={data.lesson.videoId} />
            <DefaultUi />
          </Player>
        </div>
      </div>
    </div>
  )
}
