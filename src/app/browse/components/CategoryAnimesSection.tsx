'use client'

import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import { useEffect } from 'react'

type TAnime = {
  id: string
  image: string
}

interface ICategoryAnimesProps {
  categoryTitle: string
  animes: TAnime[]
}

export const CategoryAnimesSection = ({
  categoryTitle,
  animes,
}: ICategoryAnimesProps) => {
  return (
    <>
      <section className="my-8 w-full max-md:p-4 md:ml-16">
        <header>
          <h2 className="text-2xl font-bold text-gray-100">{categoryTitle}</h2>
        </header>

        <Swiper
          className="mt-4"
          loop
          breakpoints={{
            425: { slidesPerView: 1.5 },
            768: { slidesPerView: 2.5 },
            1024: { slidesPerView: 3.5 },
          }}
          spaceBetween={30}
        >
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
