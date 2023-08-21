'use client'

import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'

export const LoadingSection = () => {
  return (
    <>
      <section className="my-32 w-full max-md:p-4 md:ml-16">
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
          <SwiperSlide>
            <div className="h-[15rem] w-[20rem] animate-pulse rounded-md bg-zinc-700"></div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="h-[15rem] w-[20rem] animate-pulse rounded-md bg-zinc-700"></div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="h-[15rem] w-[20rem] animate-pulse rounded-md bg-zinc-700"></div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="h-[15rem] w-[20rem] animate-pulse rounded-md bg-zinc-700"></div>
          </SwiperSlide>
        </Swiper>

        <Swiper
          className="mt-16"
          loop
          lazyPreloadPrevNext={4}
          breakpoints={{
            425: { slidesPerView: 1.5 },
            768: { slidesPerView: 2.5 },
            1024: { slidesPerView: 3.5 },
          }}
          spaceBetween={30}
        >
          <SwiperSlide>
            <div className="h-[15rem] w-[20rem] animate-pulse rounded-md bg-zinc-700"></div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="h-[15rem] w-[20rem] animate-pulse rounded-md bg-zinc-700"></div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="h-[15rem] w-[20rem] animate-pulse rounded-md bg-zinc-700"></div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="h-[15rem] w-[20rem] animate-pulse rounded-md bg-zinc-700"></div>
          </SwiperSlide>
        </Swiper>
      </section>
    </>
  )
}
