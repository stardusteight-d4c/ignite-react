import {
  CaretRight,
  DiscordLogo,
  FileArrowDown,
  Image,
  Lightning,
} from 'phosphor-react'
import { useGetLessonBySlugQuery } from '../graphql/generated'

interface Props {
  lessonSlug: string
}

export const Description = (props: Props) => {
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
    <div className="p-4 md:px-0 md:py-8 w-full">
      <div className="block md:flex items-start gap-16">
        <div className="flex-1">
          <h1 className="text-2xl font-bold">{data.lesson.title}</h1>
          <p className="mt-4 text-gray-200 leading-relaxed">
            {data.lesson.description}
          </p>
          {data.lesson.teacher && (
            <div className="flex items-center gap-4 mt-6">
              <img
                className="h-16 w-16 rounded-full border-2 border-blue-500"
                src={data.lesson.teacher.avatarURL}
                alt=""
              />
              <div className="leading-relaxed">
                <strong className="font-bold text-2xl block">
                  {data.lesson.teacher.name}
                </strong>
                <span className="text-gray-200 text-sm block">
                  {data.lesson.teacher.bio}
                </span>
              </div>
            </div>
          )}
        </div>

        <div className="mt-6 md:mt-0 flex flex-col gap-4">
          <a
            href="#"
            className="p-4 text-sm bg-green-500 flex items-center rounded font-bold uppercase gap-2 justify-center hover:bg-green-700 transition-colors"
          >
            <DiscordLogo size={24} />
            Comunidade no discord
          </a>

          <a
            href="#"
            className="p-4 text-sm border border-blue-500 text-blue-500 flex items-center rounded font-bold uppercase gap-2 justify-center hover:bg-blue-500 hover:text-gray-900 transition-colors"
          >
            <Lightning size={24} />
            Acesse o desafio
          </a>
        </div>
      </div>

      <div className="gap-8 mt-10 hidden md:grid grid-cols-2">
        <a
          href="#"
          className="bg-gray-700 rounded overflow-hidden flex items-stretch gap-6 hover:bg-gray-600 transition-colors"
        >
          <div className="bg-green-700 h-full p-6 flex items-center">
            <FileArrowDown size={40} />
          </div>
          <div className="py-6 leading-relaxed">
            <strong className="text-2xl">Material complementar</strong>
            <p className="text-sm text-gray-200 mt-2">
              Acesse o material complementar para acelerar o seu desenvolvimento
            </p>
          </div>
          <div className="h-full p-6 flex items-center">
            <CaretRight size={24} />
          </div>
        </a>

        <a
          href="#"
          className="bg-gray-700 rounded overflow-hidden flex items-stretch gap-6 hover:bg-gray-600 transition-colors"
        >
          <div className="bg-green-700 h-full p-6 flex items-center">
            <Image size={40} />
          </div>
          <div className="py-6 leading-relaxed">
            <strong className="text-2xl">Wallpapers exclusivos</strong>
            <p className="text-sm text-gray-200 mt-2">
              Baixe wallpapers exclusivos do Ignite Lab e personalize a sua
              máquina
            </p>
          </div>
          <div className="h-full p-6 flex items-center">
            <CaretRight size={24} />
          </div>
        </a>
      </div>
    </div>
  )
}
