'use client'

import { ArrowRight, Eye } from 'phosphor-react'

import { TAnimeData } from 'types/Animes'

import { Button } from '@fragments/Button'
import { getFirst50Words } from '@/utils/getFirst50Words'

interface IHighlightSectionProps {
  anime: TAnimeData
}

export const HighlightSection = ({ anime }: IHighlightSectionProps) => {
  return (
    <>
      {anime && (
        <section
          className={`bg-cover bg-no-repeat`}
          style={{
            backgroundImage: `url(${anime.images.poster_wide[0][7].source})`,
          }}
        >
          <div className="flex min-h-screen w-full items-center gap-4 bg-black bg-opacity-60 px-4 py-24 md:pl-16">
            <div className="flex h-full w-full max-w-2xl flex-col items-start justify-start gap-8">
              <h1 className="text-left text-6xl font-bold text-gray-100">
                {anime.title}
              </h1>

              <p className="text-gray-100">
                {getFirst50Words(anime.description)}...
              </p>

              <div className="flex w-full gap-4">
                <Button>
                  Assistir <Eye size={24} />
                </Button>

                <Button>
                  Conhecer <ArrowRight size={24} />
                </Button>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  )
}
