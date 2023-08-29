export type TGetAnimes = {
  sort_by: 'popularity' | 'newly_added'
}

export type TGetAnimesSeasons = {
  query: string
}

export type TGetAnimeEpisodes = {
  query: string
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

export type TEpisodeMetadata = {
  audio_locale: string
  availability_ends: string
  availability_notes: string
  availability_starts: string
  available_date: string | null
  available_offline: boolean
  closed_captions_available: boolean
  duration_ms: number
  eligible_region: string
  episode: string
  episode_air_date: string
  episode_number: number
  extended_maturity_rating: Record<string, unknown>
  free_available_date: string
  identifier: string
  is_clip: boolean
  is_dubbed: boolean
  is_mature: boolean
  is_premium_only: boolean
  is_subbed: boolean
  mature_blocked: boolean
  maturity_ratings: string[]
  premium_available_date: string
  premium_date: null
  season_id: string
  season_number: number
  season_slug_title: string
  season_title: string
  sequence_number: number
  series_id: string
  series_slug_title: string
  series_title: string
  subtitle_locales: string[]
  upload_date: string
  versions: {
    audio_locale: string
    guid: string
    is_premium_only: boolean
    media_guid: string
    original: boolean
    season_guid: string
    variant: string
  }[]
}

export type TPanel = {
  promo_title: string
  type: string
  slug: string
  images: {
    thumbnail: TImageSource[]
  }
  episode_metadata: TEpisodeMetadata
  external_id: string
  title: string
  description: string
  promo_description: string
  id: string
  slug_title: string
  linked_resource_key: string
  streams_link: string
  channel_id: string
}

export type TAnimeSeason = {
  is_complete: boolean;
  keywords: string[];
  images: Record<string, unknown>;
  audio_locales: string[];
  id: string;
  extended_maturity_rating: Record<string, unknown>;
  is_subbed: boolean;
  channel_id: string;
  season_sequence_number: number;
  description: string;
  subtitle_locales: string[];
  mature_blocked: boolean;
  audio_locale: string;
  series_id: string;
  season_display_number: string;
  maturity_ratings: string[];
  title: string;
  identifier: string;
  versions: {
    audio_locale: string;
    guid: string;
    original: boolean;
    variant: string;
  }[];
  number_of_episodes: number;
  slug_title: string;
  season_number: number;
  is_mature: boolean;
  is_dubbed: boolean;
  seo_description: string;
  season_tags: string[];
  is_simulcast: boolean;
  seo_title: string;
  availability_notes: string;
}

export type TVersion = {
  audio_locale: string
  guid: string
  is_premium_only: boolean
  media_guid: string
  original: boolean
  season_guid: string
  variant: string
}

export type TEpisodeData = {
  season_tags: any[]
  is_dubbed: boolean
  episode_air_date: string
  versions: TVersion[]
  listing_id: string
  production_episode_id: string
  images: {
    thumbnail: TImageSource[][]
  }
  availability_ends: string
  identifier: string
  slug_title: string
  eligible_region: string
  is_subbed: boolean
  series_id: string
  premium_available_date: string
  duration_ms: number
  season_number: number
  episode: string
  streams_link: string
  slug: string
  sequence_number: number
  upload_date: string
  id: string
  season_id: string
  seo_description: string
  recent_audio_locale: string
  extended_maturity_rating: {}
  free_available_date: string
  description: string
  seo_title: string
  hd_flag: boolean
  episode_number: number
  available_date: null
  media_type: string
  closed_captions_available: boolean
  availability_starts: string
  subtitle_locales: string[]
  channel_id: string
  available_offline: boolean
  next_episode_title: string
  season_slug_title: string
  is_clip: boolean
  availability_notes: string
  is_mature: boolean
  series_title: string
  is_premium_only: boolean
  series_slug_title: string
  audio_locale: string
  season_title: string
  title: string
  premium_date: null
  mature_blocked: boolean
  maturity_ratings: string[]
  next_episode_id: string
}

export type TEpisodesResponse = {
  data: {
    data: TEpisodeData[]
  }
}

export type TAnimeSeasonsResponse = {
  data: {
    data: TAnimeSeason[]
  }
}

export type TAnimeReponse = {
  data: {
    data: TAnimeData[]
  }
}
