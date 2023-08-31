'use client'

import { getEpisodeStream } from '@/services/api'
import { TStreamData } from '@/types/Animes'
import { AppError } from '@utils/AppError'
import { useSearchParams } from 'next/navigation'
import { useEffect, useRef, useState } from 'react'
import ReactPlayer from "react-player/lazy"
import { toast } from 'react-toastify'

interface IWatchProps {
  params: {
    'anime-id': string
  }
}

export default function Watch({ params }: IWatchProps) {
  const [isLoading, setIsLoading] = useState(true)
  const [stream, setStream] = useState<TStreamData | null>(null)

  const queryParams = useSearchParams()
  const videoId = queryParams.get('v')

  useEffect(() => {
    const fetchEpisodeStream = async () => {
      try {
        setIsLoading(true)

        const streamData = await getEpisodeStream({ query: videoId as string })

        return setStream(streamData[0])
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
      } finally {
        setIsLoading(false)
      }
    }

    fetchEpisodeStream()
  }, [videoId])

  return (
    <>
      <div className="flex min-h-screen w-full flex-col overflow-hidden bg-gradient-to-r  from-zinc-900 to-zinc-950">
        {!isLoading && stream && (
          <main className='w-full h-full flex '>
            <ReactPlayer config={{ file: { forceHLS: true} }} controls url={stream.adaptive_hls["pt-BR"].url} />
        </main>
        )}

        {isLoading && <main>
          <h1>Carregando...</h1></main>}
      </div>
    </>
  )
}
