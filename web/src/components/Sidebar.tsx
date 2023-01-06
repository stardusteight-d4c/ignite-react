import { useGetLessonsQuery } from '../graphql/generated'
import { Lesson } from './Lesson'

export function Sidebar() {
  const { data } = useGetLessonsQuery()
  console.log(data)

  return (
    <aside className="min-w-[348px] max-w-[348px] border border-l-0 border-gray-600 min-h-full max-h-[524px] rounded-r-xl overflow-hidden  bg-gray-700">
      <span className="font-bold text-2xl text-center p-6 border-b border-gray-500 block">
        Cronograma das aulas
      </span>
      <div className="h-full p-4 overflow-y-scroll">
        <div className="flex flex-col gap-8 mb-[81px]">
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
