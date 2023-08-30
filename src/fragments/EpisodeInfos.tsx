import Image from 'next/image'
import Link from 'next/link'

import { TAnimeData, TEpisodeData } from 'types/Animes'

interface IEpisodeInfosProps {
  anime: TAnimeData
  episode: TEpisodeData
}

export const EpisodeInfos = ({ anime, episode }: IEpisodeInfosProps) => {
  const episodeDurationInMinutes = Math.floor(episode.duration_ms / 60000)
  const videoJapaneseVersion = episode.versions.find(version => version.audio_locale === "ja-JP")

  return (
    <Link href={{
      pathname: `/watch/${anime.id}`,
      query: { v: videoJapaneseVersion?.media_guid }
    }}
     className="flex flex-col gap-4 md:flex-row hover:opacity-80 transiton-all duration-300">
      <Image
        className="h-auto w-auto cursor-pointer rounded-md selection:bg-none"
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
    </Link>
  )
}
