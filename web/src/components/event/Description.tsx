import { useGetLessonBySlugQuery } from '../../graphql/generated'
import { CallToActionButtons } from './integrate/CallToActionButtons'
import { ExtraMaterial } from './integrate/ExtraMaterial'
import { TeacherInfo } from './integrate/TeacherInfo'

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
      <div className={style.adaptiveFlex}>
        <p>Carregando...</p>
      </div>
    )
  }

  return (
    <div className={style.wrapper}>
      <main className={style.mainContentContainer}>
        <div className={style.adaptiveFlex}>
          <h1 className={style.title}>{data.lesson.title}</h1>
          <p className={style.description}>{data.lesson.description}</p>
          {data.lesson.teacher && (
            <TeacherInfo
              avatarURL={data.lesson.teacher.avatarURL}
              name={data.lesson.teacher.name}
              bio={data.lesson.teacher.bio}
            />
          )}
        </div>
        <CallToActionButtons />
      </main>
      <ExtraMaterial />
    </div>
  )
}

const style = {
  wrapper: `p-4 md:px-0 md:py-8 w-full`,
  mainContentContainer: `block md:flex items-start gap-16`,
  adaptiveFlex: `flex-1`,
  title: `text-2xl font-bold`,
  description: `mt-4 text-gray-200 leading-relaxed`,
}
