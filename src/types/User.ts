export type TRegisterUser = {
  name: string
  email: string
  password: string
}

export type TRegisterUserResponse = {
  id: string
  email: string
  name: string
}

export type TLoginUser = {
  email: string
  password: string
}
