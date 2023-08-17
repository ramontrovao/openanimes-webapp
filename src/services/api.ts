import axios from 'axios'

import { TRegisterUser } from '@/src/types/User'
import { AppError } from '@utils/AppError'
import { AnyAaaaRecord } from 'dns'

const api = axios.create({
  baseURL: 'https://api.learxd.dev/open-animes/v1',
})

// User

export const registerUser = async ({
  name,
  email,
  password,
}: TRegisterUser) => {
  try {
    const res = await api.post('/user/register', {
      name,
      email,
      password,
    })

    return res
  } catch (error: any) {
    const errorMessage = error.response.data.message as string
    const errorStatusCode = error.response.status as number

    console.log(errorMessage, errorStatusCode)

    if (errorMessage && errorStatusCode) {
      throw new AppError(errorMessage, errorStatusCode)
    }

    throw error
  }
}
