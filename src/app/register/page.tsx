'use client'

import Link from 'next/link'

import { useRegisterForm } from '@hooks/forms/useRegisterForm'

import { Button } from '@fragments/Button'
import { Input } from '@fragments/Input'
import { registerUser } from '@/src/services/api'

type TRegisterForm = {
  email: string
  username: string
  password: string
  confirmPassword: string
}

export default function Register() {
  const { register, handleSubmit, errors } = useRegisterForm()

  const onSubmit = async ({ email, username, password }: TRegisterForm) => {
    try {
      const payload = { email, name: username, password }
      const res = await registerUser({ email, name: username, password })
      console.log(res)
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <div className="flex w-full flex-col bg-gradient-to-r  from-zinc-900 to-zinc-950">
      <main className="m-auto flex min-h-screen w-full max-w-[80rem] items-center justify-center px-4 py-24">
        <section className="flex w-full max-w-[40rem] flex-col gap-8">
          <h2 className="text-center text-2xl text-gray-100">
            Crie a sua conta
          </h2>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex w-full flex-col gap-4 rounded-md border-[1px] border-red-500 bg-zinc-800 p-8"
          >
            <div className="flex flex-col gap-4">
              <Input
                labelText="Seu apelido"
                id="username-field"
                placeholder="irmao_do_forro"
                errorText={errors.username?.message}
                {...register('username')}
              />

              <Input
                labelText="Seu e-mail"
                id="email-field"
                placeholder="irmaosdoforro@gmail.com"
                errorText={errors.email?.message}
                {...register('email')}
              />

              <Input
                inputType="password"
                labelText="Sua senha"
                id="password-field"
                placeholder="AbubLeble1234598!@#"
                errorText={errors.password?.message}
                {...register('password')}
              />

              <Input
                inputType="password"
                labelText="Confirme a sua senha"
                id="confirm-password-field"
                placeholder="AbubLeble1234598!@#"
                errorText={errors.confirmPassword?.message}
                {...register('confirmPassword')}
              />
            </div>

            <div className="flex flex-col items-start justify-center gap-4">
              <Button type="submit">Começar a assistir animes</Button>
              <Link href="/" className="text-md text-gray-100 hover:opacity-80">
                Já possuo uma conta, quero logar!
              </Link>
            </div>
          </form>
        </section>
      </main>
    </div>
  )
}
