'use client'

import { ToastContainer, toast } from 'react-toastify'
import { CategoryAnimesSection } from './components/CategoryAnimesSection'
import { HighlightSection } from './components/HighlightSection'
import { getAnimes } from '@services/api'
import { AppError } from '@utils/AppError'
import { useEffect, useState } from 'react'
import { TAnimeData } from 'types/Animes'

export default function Browse() {
  const [animes, setAnimes] = useState({
    popular: [] as TAnimeData[],
    newly_added: [] as TAnimeData[],
  })

  const fetchAnimes = async () => {
    try {
      const animes = await Promise.all([
        getAnimes({ sort_by: 'popularity' }),
        getAnimes({ sort_by: 'newly_added' }),
      ])

      return setAnimes({
        popular: animes[0],
        newly_added: animes[1],
      })
    } catch (error) {
      if (error instanceof AppError) {
        return toast.error(error.message, {
          position: 'top-right',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'dark',
        })
      }

      return console.log(error)
    }
  }

  useEffect(() => {
    fetchAnimes()
  }, [])

  return (
    <div className="flex w-full flex-col overflow-hidden bg-gradient-to-r  from-zinc-900 to-zinc-950">
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />

      <main className="m-auto flex min-h-screen w-full flex-col">
        <HighlightSection
          anime={
            animes.newly_added[
              Math.floor(Math.random() * animes.newly_added.length - 1)
            ]
          }
        />
        <CategoryAnimesSection
          categoryTitle="Em alta"
          animes={animes.popular}
        />
        <CategoryAnimesSection
          categoryTitle="Lançados recentemente"
          animes={animes.newly_added}
        />
      </main>
    </div>
  )
}
