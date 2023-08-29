import { ReactNode, useState } from 'react'
import Image from 'next/image'
import { X } from 'phosphor-react'

import { TAnimeData, TAnimeSeason, TEpisodeData } from 'types/Animes'

import { Modal } from '@fragments/Modal'
import { getAnimeEpisodes, getAnimesSeasons } from '@services/api'
import { toast } from 'react-toastify'
import { AppError } from '@utils/AppError'
import { EpisodeInfos } from '@/fragments/EpisodeInfos'
import { Select } from '@fragments/Select'

interface IAnimeInfosProps {
  anime: TAnimeData
  triggerComponent: ReactNode
}

type TAnimeInfo = {
  episodesData: TEpisodeData[]
  seasonsData: TAnimeSeason[]
}

export const AnimeInfos = ({ anime, triggerComponent }: IAnimeInfosProps) => {
  const [animeInfo, setAnimeInfo] = useState<TAnimeInfo | null>(null)
  const [seasonActive, setSeasonActive] = useState<TAnimeSeason | null>(null)

  const episodesExists = !!animeInfo?.episodesData
  const seasonsTitle =
    animeInfo?.seasonsData.map((season) => season.title) ?? []

  const fetchAnimeSeasons = async () => {
    try {
      const seasonsData = await getAnimesSeasons({ query: anime.id })

      return seasonsData
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
      const episodesData = await getAnimeEpisodes({ query: seasonId as string })

      return episodesData
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
    const seasons = await fetchAnimeSeasons()
    const seasonsData = seasons as TAnimeSeason[]

    const episodes = await fetchAnimeEpisodes(seasonsData[0]?.id)
    const episodesData = episodes as TEpisodeData[]

    setAnimeInfo({ seasonsData, episodesData } as TAnimeInfo)
    setSeasonActive(seasonsData[0])
  }

  return (
    <Modal
      title={anime.title}
      closeComponent={<X size={32} />}
      triggerComponent={triggerComponent}
      onOpenChange={onOpenModal}
    >
      <header className="mb-8">
        <Image
          src={anime.images.poster_wide[0][7].source}
          alt={`Capa do anime "${anime.title}"`}
          width={1920}
          height={1080}
          loading="lazy"
          className="my-4 max-h-[40rem] w-full rounded-md"
        />

        <p className="text-gray-300">{anime.description}</p>
      </header>

      <main>
        <header className="flex flex-wrap items-center gap-4 md:flex-nowrap">
          <strong className="text-xl font-bold text-gray-100">Episódios</strong>

          <Select options={seasonsTitle} />
        </header>

        {animeInfo && episodesExists && (
          <main className="mt-8 flex flex-col gap-4">
            {animeInfo.episodesData?.map((episode) => (
              <EpisodeInfos key={episode.id} episode={episode} />
            ))}
          </main>
        )}

        {!episodesExists && (
          <main className="mt-8 flex flex-col gap-4">
            <div className="min-h-[15rem] w-full animate-pulse rounded-md bg-zinc-600" />
            <div className="min-h-[15rem] w-full animate-pulse rounded-md bg-zinc-600" />
            <div className="min-h-[15rem] w-full animate-pulse rounded-md bg-zinc-600" />
            <div className="min-h-[15rem] w-full animate-pulse rounded-md bg-zinc-600" />
            <div className="min-h-[15rem] w-full animate-pulse rounded-md bg-zinc-600" />
            <div className="min-h-[15rem] w-full animate-pulse rounded-md bg-zinc-600" />
          </main>
        )}
      </main>
    </Modal>
  )
}
