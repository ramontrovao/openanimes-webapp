'use client'

import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'

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
    <>
      <section className="ml-16 mt-8 w-full">
        <header>
          <h2 className="text-2xl font-bold text-white">{categoryTitle}</h2>
        </header>

        <Swiper className="mt-4" loop slidesPerView={3.5} spaceBetween={30}>
          {animes.map((anime) => (
            <SwiperSlide key={anime.id}>
              <Image
                className="h-full cursor-pointer rounded-md"
                id={anime.id}
                src={anime.image}
                alt=""
                width={350}
                height={300}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </>
  )
}
