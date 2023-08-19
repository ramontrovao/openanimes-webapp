import Image from 'next/image'

type TAnime = {
  id: string
  image: string
}

interface ICategoryAnimesProps {
  categoryTitle: string
  animes: TAnime[]
}

export const CategoryAnimes = ({
  categoryTitle,
  animes,
}: ICategoryAnimesProps) => {
  return (
    <section className="ml-8 mt-8 w-full">
      <header>
        <h2 className="text-2xl font-bold text-white">{categoryTitle}</h2>
      </header>

      <div className="mt-4 flex gap-4">
        {animes.map((anime) => (
          <Image
            className="max-h-[25rem] max-w-[20rem] cursor-pointer rounded-md transition-all duration-500 hover:scale-105"
            key={anime.id}
            id={anime.id}
            src={anime.image}
            alt=""
            width={1920}
            height={1080}
          />
        ))}
      </div>
    </section>
  )
}
