'use client'

import Link from 'next/link'
import { toast, ToastContainer } from 'react-toastify'

import { loginUser } from '@services/api'
import { AppError } from '@utils/AppError'

import { Input } from '@fragments/Input'
import { Button } from '@fragments/Button'

import { useLoginForm } from '@hooks/forms/useLoginForm'

import 'react-toastify/dist/ReactToastify.css'

type TLoginForm = {
  email: string
  password: string
}

export default function Home() {
  const { register, handleSubmit, errors } = useLoginForm()

  const onSubmit = async ({ email, password }: TLoginForm) => {
    try {
      const payload = { email, password }
      const JWTtoken = await loginUser(payload)

      console.log(JWTtoken)
      return toast.success('Autenticado com sucesso =D', {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'dark',
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

  return (
    <div className="flex w-full flex-col bg-gradient-to-r  from-zinc-900 to-zinc-950">
      <main className="m-auto flex min-h-screen w-full max-w-[80rem] items-center justify-center px-4 py-24">
        <section className="flex w-full max-w-[40rem] flex-col gap-8">
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

          <h2 className="text-center text-2xl text-gray-100">
            Acesse a sua conta
          </h2>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex w-full flex-col gap-4 rounded-md border-[1px] border-red-500 bg-zinc-800 p-8"
          >
            <div className="flex flex-col gap-4">
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
            </div>

            <div className="flex flex-col items-start justify-center gap-4">
              <Button>Entrar</Button>
              <Link
                href="/register"
                className="text-md text-gray-100 hover:opacity-80"
              >
                Não possuo uma conta, quero criar!
              </Link>
            </div>
          </form>
        </section>
      </main>
    </div>
  )
}
