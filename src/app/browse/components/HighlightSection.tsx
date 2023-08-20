'use client'

import { Button } from '@fragments/Button'
import { ArrowRight, Eye } from 'phosphor-react'

export const HighlightSection = () => {
  return (
    <section className=" bg-[url('https://www.crunchyroll.com/imgsrv/display/thumbnail/1920x1080/catalog/crunchyroll/6b5f4fc8c0a7bb5012b9c0930a46570f.jpe')] bg-cover bg-no-repeat ">
      <div className="flex min-h-screen w-full items-center gap-4 bg-black bg-opacity-60 pl-16">
        <div className="flex h-full w-full max-w-2xl flex-col items-start justify-start gap-8">
          <h1 className="text-left text-6xl font-bold text-gray-100">
            Demon Slayer: Kimetsu no Yaiba
          </h1>

          <p className="text-gray-100">
            Japão, era Taisho. Tanjiro, um bondoso jovem que ganha a vida
            vendendo carvão, descobre que sua família foi massacrada por um
            demônio...
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
  )
}
