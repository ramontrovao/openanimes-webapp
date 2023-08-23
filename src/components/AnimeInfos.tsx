import { ReactNode, useEffect, useState } from 'react'
import Image from 'next/image'
import { X } from 'phosphor-react'

import { TAnimeData, TEpisodeData } from 'types/Animes'

import { Modal } from '@fragments/Modal'
import { getAnimeEpisodes, getAnimesSeasons } from '@services/api'
import { toast } from 'react-toastify'
import { AppError } from '@utils/AppError'

interface IAnimeInfosProps {
  anime: TAnimeData
  triggerComponent: ReactNode
}

export const AnimeInfos = ({ anime, triggerComponent }: IAnimeInfosProps) => {
  const [episodes, setEpisodes] = useState<TEpisodeData[] | null>(null)

  const fetchAnimeSeasons = async () => {
    try {
      const animes = await getAnimesSeasons({ query: anime.id })
      const animeSeasonId = animes[0].panel.episode_metadata.season_id

      return animeSeasonId
    } catch (error) {
      if (error instanceof AppError) {
        return toast.error(error.message, {
          position: 'top-right',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'dark',
        })
      }

      return console.log(error)
    }
  }

  const fetchAnimeEpisodes = async (seasonId: string) => {
    try {
      const animes = await getAnimeEpisodes({ query: seasonId as string })

      setEpisodes(animes)

      return console.log(animes)
    } catch (error) {
      if (error instanceof AppError) {
        return toast.error(error.message, {
          position: 'top-right',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'dark',
        })
      }

      return console.log(error)
    }
  }

  const onOpenModal = async () => {
    const seasonId = await fetchAnimeSeasons()

    await fetchAnimeEpisodes(seasonId as string)

    console.log(episodes)
  }

  return (
    <Modal
      title={anime.title}
      closeComponent={<X size={32} />}
      triggerComponent={triggerComponent}
      onOpenChange={onOpenModal}
    >
      <Image
        src={anime.images.poster_wide[0][7].source}
        alt={`Capa do anime "${anime.title}"`}
        width={1920}
        height={1080}
        loading="lazy"
        className="my-4 max-h-[40rem] w-full"
      />

      <p className="text-gray-300">{anime.description}</p>
    </Modal>
  )
}
