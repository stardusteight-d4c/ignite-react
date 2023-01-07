import React from 'react'

interface Props {
  avatarURL: string
  name: string
  bio: string
}

export function TeacherInfo({ avatarURL, name, bio }: Props) {
  return (
    <div className={style.wrapper}>
      <img className={style.avatarImg} src={avatarURL} />
      <div className={style.infoContainer}>
        <strong className={style.name}>{name}</strong>
        <span className={style.bio}>{bio}</span>
      </div>
    </div>
  )
}

const style = {
  wrapper: `flex items-center gap-4 mt-6`,
  avatarImg: `h-16 w-16 rounded-full border-2 border-blue-500`,
  infoContainer: `leading-relaxed`,
  name: `font-bold text-2xl block`,
  bio: `text-gray-200 text-sm block`,
}
