import axios from 'axios'

import { TRegisterUser } from '@/src/types/User'

const api = axios.create({
  baseURL: 'https://api.learxd.dev/crunchyroll/v1',
})

// User

export const registerUser = async ({
  name,
  email,
  password,
}: TRegisterUser) => {
  try {
    const res = await api.post('/user/register', {
      data: {
        name,
        email,
        password,
      },
    })

    return res
  } catch (error) {
    throw error
  }
}
