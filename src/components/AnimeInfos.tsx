import { ChangeEvent, ReactNode, useState } from 'react'
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
  const [isLoading, setIsLoading] = useState(true)
  const [animeInfo, setAnimeInfo] = useState<TAnimeInfo | null>(null)

  const episodesIsNotEmpty =
    animeInfo?.episodesData && animeInfo?.episodesData.length > 0
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

  const handleChangeSeason = async (e: ChangeEvent<HTMLSelectElement>) => {
    setIsLoading(true)

    const newSeasonTitle = e.target.value
    const newSeasonActive = animeInfo?.seasonsData.find(
      (season) => season.title === newSeasonTitle,
    )

    const newSeasonEpisodes = await fetchAnimeEpisodes(
      newSeasonActive?.id as string,
    )
    setAnimeInfo({
      ...animeInfo,
      episodesData: newSeasonEpisodes,
    } as TAnimeInfo)

    setIsLoading(false)
  }

  const onOpenModal = async () => {
    setIsLoading(true)

    const seasons = await fetchAnimeSeasons()
    const seasonsData = seasons as TAnimeSeason[]

    const episodes = await fetchAnimeEpisodes(seasonsData[0]?.id)
    const episodesData = episodes as TEpisodeData[]

    setAnimeInfo({ seasonsData, episodesData } as TAnimeInfo)

    setIsLoading(false)
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
        <header className="flex flex-wrap items-center justify-between gap-4 md:flex-nowrap">
          <strong className="text-xl font-bold text-gray-100">Episódios</strong>

          <Select onChange={handleChangeSeason} options={seasonsTitle} />
        </header>

        {!isLoading && (
          <main className="mt-8 flex flex-col gap-4">
            {animeInfo?.episodesData?.map((episode) => (
              <EpisodeInfos key={episode.id} anime={anime} episode={episode} />
            ))}
          </main>
        )}

        {isLoading && (
          <main className="mt-8 flex flex-col gap-4">
            <div className="min-h-[12.5rem] w-full animate-pulse rounded-md bg-zinc-600" />
            <div className="min-h-[12.5rem] w-full animate-pulse rounded-md bg-zinc-600" />
            <div className="min-h-[12.5rem] w-full animate-pulse rounded-md bg-zinc-600" />
            <div className="min-h-[12.5rem] w-full animate-pulse rounded-md bg-zinc-600" />
            <div className="min-h-[12.5rem] w-full animate-pulse rounded-md bg-zinc-600" />
            <div className="min-h-[12.5rem] w-full animate-pulse rounded-md bg-zinc-600" />
          </main>
        )}
      </main>
    </Modal>
  )
}
