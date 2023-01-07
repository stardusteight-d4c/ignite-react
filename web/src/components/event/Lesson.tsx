import { CheckCircle, Lock } from 'phosphor-react'
import { isPast, format } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import { useNavigate, useParams } from 'react-router-dom'
import {
  containerStyle,
  spanStageReleasedStyle,
  titleStyle,
  typeStyle,
  wrapperDivProps,
} from './integrate/props'

interface LessonProps {
  title: string
  slug: string
  availableAt: Date
  type: 'live' | 'class'
}

export function Lesson(props: LessonProps) {
  const { slug } = useParams<{ slug: string }>()
  const navigate = useNavigate()

  const isLessonAvailable = isPast(props.availableAt)
  const availableDateFormatted = format(
    props.availableAt,
    "EEEE' • 'd' de 'MMMM' • 'k'h'mm",
    {
      locale: ptBR,
    }
  )

  const isActiveLesson = slug === props.slug

  return (
    <div
      {...wrapperDivProps({ isLessonAvailable, slug: props.slug, navigate })}
    >
      <span className={style.availableDate}>{availableDateFormatted}</span>
      <div {...containerStyle({ isActiveLesson, isLessonAvailable })}>
        <header className={style.header}>
          {isLessonAvailable ? (
            <span {...spanStageReleasedStyle({ isActiveLesson })}>
              <CheckCircle size={20} />
              Conteúdo liberado
            </span>
          ) : (
            <span className={style.spanStageLock}>
              <Lock size={20} />
              Em breve
            </span>
          )}
          <span {...typeStyle({ isActiveLesson })}>
            {props.type === 'live' ? 'AO VIVO' : 'AULA PRÁTICA'}
          </span>
        </header>
        <strong {...titleStyle({ isActiveLesson })}>{props.title}</strong>
      </div>
    </div>
  )
}

const style = {
  availableDate: `text-gray-300`,
  header: `flex items-center justify-between`,
  spanStageLock: `text-sm text-orange-500 font-medium flex items-center gap-2`,
}
