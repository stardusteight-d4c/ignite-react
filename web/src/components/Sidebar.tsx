import { useGetLessonsQuery } from '../graphql/generated'
import { Lesson } from './Lesson'

export function Sidebar() {
  const { data } = useGetLessonsQuery()

  return (
    <aside className={style.wrapper}>
      <h2 className={style.title}>Cronograma das aulas</h2>
      <div className={style.contentContainer}>
        <div className={style.lessonsContainer}>
          {data?.lessons.map((lesson) => {
            return (
              <Lesson
                key={lesson.id}
                title={lesson.title}
                slug={lesson.slug}
                availableAt={new Date(lesson.availableAt)}
                type={lesson.lessonType}
              />
            )
          })}
        </div>
      </div>
    </aside>
  )
}

const style = {
  wrapper: `min-w-[348px] w-screen md:max-w-[348px] border border-l-0 border-gray-600 min-h-full max-h-[524px] md:rounded-r-xl scrollbar-hide overflow-y-scroll md:overflow-y-hidden overflow-hidden bg-gray-700`,
  title: `font-bold text-2xl text-center p-6 border-b border-gray-500 block`,
  contentContainer: `h-full p-4 scrollbar-hide overflow-y-scroll`,
  lessonsContainer: `flex flex-col gap-8 md:mb-[81px]`,
}
