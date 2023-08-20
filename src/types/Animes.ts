export type TGetAnimes = {
  sort_by: 'popularity' | 'newly_added'
}

export type TImageSource = {
  height: number
  source: string
  type: string
  width: number
}

export type TImageType = {
  [key: string]: TImageSource[]
}

export type TSeriesMetadata = {
  audio_locales: string[]
  availability_notes: string
  episode_count: number
  extended_description: string
  extended_maturity_rating: Record<string, unknown> // You might want to define a proper type here
  is_dubbed: boolean
  is_mature: boolean
  is_simulcast: boolean
  is_subbed: boolean
  mature_blocked: boolean
  maturity_ratings: string[]
  season_count: number
  series_launch_year: number
  subtitle_locales: string[]
}

export type TAnimeData = {
  promo_description: string
  linked_resource_key: string
  promo_title: string
  title: string
  external_id: string
  type: string
  images: {
    poster_tall: TImageType
    poster_wide: TImageType
    promo_image: TImageType
  }
  id: string
  last_public: string
  slug: string
  new: boolean
  description: string
  channel_id: string
  slug_title: string
  series_metadata: TSeriesMetadata
}
