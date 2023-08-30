'use client'

import { useRouter, useSearchParams } from 'next/navigation'
import { useEffect } from 'react'

interface IWatchProps {
  params: {
    'anime-id': string
  }
}

export default function Watch({ params }: IWatchProps) {
  const queryParams = useSearchParams()
  const videoId = queryParams.get('v')

  useEffect(() => {
    console.log(params['anime-id'], videoId)
  }, [videoId, params])

  return <h1>Watch</h1>
}
