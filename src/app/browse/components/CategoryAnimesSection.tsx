'use client'

import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'

import { TAnimeData } from 'types/Animes'

import 'swiper/css'
import { AnimeInfos } from '@components/AnimeInfos'

interface ICategoryAnimesProps {
  categoryTitle: string
  animes: TAnimeData[]
}

export const CategoryAnimesSection = ({
  categoryTitle,
  animes,
}: ICategoryAnimesProps) => {
  return (
    <section className="my-4 w-full max-md:p-4 md:my-8 md:ml-16">
      <header>
        <h2 className="text-2xl font-bold text-gray-100">{categoryTitle}</h2>
      </header>

      <Swiper
        className="mt-4"
        loop
        lazyPreloadPrevNext={4}
        breakpoints={{
          425: { slidesPerView: 1.5 },
          768: { slidesPerView: 2.5 },
          1024: { slidesPerView: 3.5 },
        }}
        spaceBetween={30}
      >
        {animes.map((anime) => (
          <SwiperSlide key={anime.id}>
            <AnimeInfos
              anime={anime}
              triggerComponent={
                <Image
                  className="transiton-all h-auto w-auto cursor-pointer rounded-md duration-500 selection:bg-none hover:opacity-80"
                  loading="lazy"
                  id={anime.id}
                  src={anime.images.poster_wide[0][7].source}
                  alt={`Capa do anime "${anime.title}"`}
                  width={350}
                  height={300}
                />
              }
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}
