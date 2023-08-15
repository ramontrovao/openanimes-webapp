import Link from 'next/link'

import { Button } from '@fragments/Button'
import { Input } from '@fragments/Input'

export default function Register() {
  return (
    <div className="flex w-full flex-col bg-gradient-to-r  from-zinc-900 to-zinc-950">
      <main className="m-auto flex min-h-screen w-full max-w-[80rem] items-center justify-center px-4 py-24">
        <section className="flex w-full max-w-[40rem] flex-col gap-8">
          <h2 className="text-center text-2xl text-gray-100">
            Crie a sua conta
          </h2>

          <form className="flex w-full flex-col gap-4 rounded-md border-[1px] border-red-500 bg-zinc-800 p-8">
            <div className="flex flex-col gap-4">
              <Input
                labelText="Seu nome"
                id="name-field"
                placeholder="Irmão do forró"
              />

              <Input
                labelText="Seu e-mail"
                id="email-field"
                placeholder="irmaosdoforro@gmail.com"
              />

              <Input
                inputType="password"
                labelText="Sua senha"
                id="password-field"
                placeholder="AbubLeble1234598!@#"
              />

              <Input
                inputType="password"
                labelText="Confirme a sua senha"
                id="confirm-password-field"
                placeholder="AbubLeble1234598!@#"
              />
            </div>

            <div className="flex flex-col items-start justify-center gap-4">
              <Button>Entrar</Button>
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
