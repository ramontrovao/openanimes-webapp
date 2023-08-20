'use client'

import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'

import { TAnimeData } from 'types/Animes'

import 'swiper/css'

interface ICategoryAnimesProps {
  categoryTitle: string
  animes: TAnimeData[]
}

export const CategoryAnimesSection = ({
  categoryTitle,
  animes,
}: ICategoryAnimesProps) => {
  return (
    <>
      <section className="my-8 w-full max-md:p-4 md:ml-16">
        {animes && (
          <>
            <header>
              <h2 className="text-2xl font-bold text-gray-100">
                {categoryTitle}
              </h2>
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
                  <Image
                    className="h-auto w-auto cursor-pointer rounded-md"
                    loading="lazy"
                    id={anime.id}
                    src={anime.images.poster_wide[0][7].source}
                    alt=""
                    width={350}
                    height={300}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </>
        )}

        {!animes && (
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
            <SwiperSlide>
              <div className="min-h-[15rem] min-w-[22.5rem] animate-pulse rounded-md bg-slate-600" />
            </SwiperSlide>
            <SwiperSlide>
              <div className="min-h-[15rem] min-w-[22.5rem] animate-pulse rounded-md bg-slate-600" />
            </SwiperSlide>
            <SwiperSlide>
              <div className="min-h-[15rem] min-w-[22.5rem] animate-pulse rounded-md bg-slate-600" />
            </SwiperSlide>
            <SwiperSlide>
              <div className="min-h-[15rem] min-w-[22.5rem] animate-pulse rounded-md bg-slate-600" />
            </SwiperSlide>
          </Swiper>
        )}
      </section>
    </>
  )
}
