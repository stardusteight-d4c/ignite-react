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
    className: `group ${
      data.isLessonAvailable ? 'cursor-pointer' : 'cursor-not-allowed'
    }`,
  }
  return props
}

interface ContainerStyleData {
  isActiveLesson: boolean
  isLessonAvailable: boolean
}

export const containerStyle = ({ ...data }: ContainerStyleData) => {
  return {
    className: `rounded border border-gray-500 p-4 mt-2 ${
      data.isActiveLesson
        ? 'bg-green-500'
        : !data.isLessonAvailable && data.isActiveLesson
        ? 'bg-transparent'
        : data.isLessonAvailable
        ? 'group-hover:border-green-500'
        : !data.isLessonAvailable
        ? 'group-hover:border-orange-500'
        : ''
    }`,
  }
}

export const spanStageReleasedStyle = ({
  ...data
}: {
  isActiveLesson: boolean
}) => {
  return {
    className: `text-sm font-medium flex items-center gap-2 ${
      data.isActiveLesson ? 'text-white' : 'text-blue-500'
    }`,
  }
}

export const typeStyle = ({ ...data }: { isActiveLesson: boolean }) => {
  return {
    className: `text-xs inline-block rounded py-[0.125rem] px-2 text-white border font-bold ${
      data.isActiveLesson ? 'border-white' : 'border-green-300'
    }`,
  }
}

export const titleStyle = ({ ...data }: { isActiveLesson: boolean }) => {
  return {
    className: `mt-5 block ${
      data.isActiveLesson ? 'text-white' : 'text-gray-200'
    }`,
  }
}
