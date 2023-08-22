import { TAnimeData } from 'types/Animes'
import { Modal } from '@fragments/Modal'
import { ReactNode } from 'react'
import { X } from 'phosphor-react'

interface IAnimeInfosProps {
  anime: TAnimeData
  triggerComponent: ReactNode
}

export const AnimeInfos = ({ anime, triggerComponent }: IAnimeInfosProps) => {
  return (
    <Modal
      title={anime.title}
      description={anime.description}
      closeComponent={<X size={32} />}
      triggerComponent={triggerComponent}
    >
      <h1>Oi</h1>
    </Modal>
  )
}
