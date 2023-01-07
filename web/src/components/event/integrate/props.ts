import classNames from 'classnames'
import { NavigateFunction } from 'react-router-dom'

interface WrapperDivData {
  isLessonAvailable: boolean
  slug: string
  navigate: NavigateFunction
}

export function wrapperDivProps({ ...data }: WrapperDivData) {
  const props = {
    onClick: () =>
      data.isLessonAvailable && data.navigate(`/event/lesson/${data.slug}`),
    className: classNames('group', {
      'cursor-pointer': data.isLessonAvailable,
      'cursor-not-allowed': !data.isLessonAvailable,
    }),
  }
  return props
}

interface ContainerStyleData {
  isActiveLesson: boolean
  isLessonAvailable: boolean
}

export const containerStyle = ({ ...data }: ContainerStyleData) => {
  return {
    className: classNames('rounded border border-gray-500 p-4 mt-2', {
      'bg-green-500': data.isActiveLesson,
      'bg-transparent': !data.isLessonAvailable && data.isActiveLesson,
      'group-hover:border-green-500': data.isLessonAvailable,
      'group-hover:border-orange-500': !data.isLessonAvailable,
    }),
  }
}

export const spanStageReleasedStyle = ({
  ...data
}: {
  isActiveLesson: boolean
}) => {
  return {
    className: classNames('text-sm font-medium flex items-center gap-2', {
      'text-white': data.isActiveLesson,
      'text-blue-500': !data.isActiveLesson,
    }),
  }
}

export const typeStyle = ({ ...data }: { isActiveLesson: boolean }) => {
  return {
    className: classNames(
      'text-xs rounded py-[0.125rem] px-2 text-white border font-bold',
      {
        'border-white': data.isActiveLesson,
        'border-green-300': !data.isActiveLesson,
      }
    ),
  }
}

export const titleStyle = ({ ...data }: { isActiveLesson: boolean }) => {
  return {
    className: classNames('mt-5 block', {
      'text-white': data.isActiveLesson,
      'text-gray-200': !data.isActiveLesson,
    }),
  }
}
