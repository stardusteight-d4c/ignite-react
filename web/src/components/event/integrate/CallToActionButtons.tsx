import { DiscordLogo, Lightning } from 'phosphor-react'

interface Props {}

export function CallToActionButtons(props: Props) {
  return (
    <div className={style.wrapper}>
      <a href="#" className={style.discord}>
        <DiscordLogo size={24} />
        Comunidade no discord
      </a>

      <a href="#" className={style.challenge}>
        <Lightning size={24} />
        Acesse o desafio
      </a>
    </div>
  )
}

const style = {
  wrapper: `mt-6 md:mt-0 flex flex-col gap-4`,
  discord: `p-4 text-sm bg-green-500 flex items-center rounded font-bold uppercase gap-2 justify-center hover:bg-green-700 transition-colors`,
  challenge: `p-4 text-sm border border-blue-500 text-blue-500 flex items-center rounded font-bold uppercase gap-2 justify-center hover:bg-blue-500 hover:text-gray-900 transition-colors`,
}
