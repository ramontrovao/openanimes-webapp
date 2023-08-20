import axios from 'axios'

import { TLoginUser, TRegisterUser, TRegisterUserResponse } from 'types/User'
import { TAnimeData, TGetAnimes } from 'types/Animes'
import { AppError } from '@utils/AppError'

const openAnimesApi = axios.create({
  baseURL: 'https://api.learxd.dev/open-animes/v1',
})

const crunchyrollApi = axios.create({
  baseURL: 'https://api.learxd.dev/crunchyroll/v1',
})

// User

export const registerUser = async ({
  name,
  email,
  password,
}: TRegisterUser): Promise<TRegisterUserResponse> => {
  try {
    const res: TRegisterUserResponse = await openAnimesApi.post(
      '/user/register',
      {
        name,
        email,
        password,
      },
    )

    return res
  } catch (error: any) {
    const errorMessage = error.response.data.message as string
    const errorStatusCode = error.response.status as number

    if (errorMessage && errorStatusCode) {
      throw new AppError(errorMessage, errorStatusCode)
    }

    throw error
  }
}

export const loginUser = async ({
  email,
  password,
}: TLoginUser): Promise<string> => {
  try {
    const res: string = await openAnimesApi.post('/user/login', {
      email,
      password,
    })

    return res
  } catch (error: any) {
    const errorMessage = error.response.data.message as string
    const errorStatusCode = error.response.status as number

    if (errorMessage && errorStatusCode) {
      throw new AppError(errorMessage, errorStatusCode)
    }

    throw error
  }
}

// Animes

export const getAnimes = async ({
  sort_by,
}: TGetAnimes): Promise<TAnimeData> => {
  try {
    const res: TAnimeData = await crunchyrollApi.get(
      `/animes/browse?sort_by=${sort_by}`,
    )

    return res
  } catch (error: any) {
    const errorMessage = error.response.data.message as string
    const errorStatusCode = error.response.status as number

    if (errorMessage && errorStatusCode) {
      throw new AppError(errorMessage, errorStatusCode)
    }

    throw error
  }
}
