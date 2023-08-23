import Image from 'next/image'

import { TEpisodeData } from 'types/Animes'

interface IEpisodeInfosProps {
  episode: TEpisodeData
}

export const EpisodeInfos = ({ episode }: IEpisodeInfosProps) => {
  const episodeDurationInMinutes = Math.floor(episode.duration_ms / 60000)

  return (
    <div className="flex flex-col gap-4 md:flex-row">
      <Image
        className="transiton-all h-auto w-auto cursor-pointer rounded-md duration-500 selection:bg-none hover:opacity-80"
        loading="lazy"
        id={episode.id}
        src={episode.images.thumbnail[0][7].source}
        alt={`Capa do episódio "${episode.title}"`}
        width={250}
        height={200}
      />

      <div>
        <header className="flex items-center justify-between">
          <strong className="text-gray-100">{episode.title}</strong>
        </header>

        <main className="mt-4">
          <span className="text-gray-300">
            Episódio {episode.episode_number}
          </span>{' '}
          - <p className="text-gray-300">{episodeDurationInMinutes} min</p>
        </main>
      </div>
    </div>
  )
}
