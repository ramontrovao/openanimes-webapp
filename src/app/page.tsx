import Link from 'next/link'
import { Input } from '@fragments/Input'
import { Button } from '@fragments/Button'

export default function Home() {
  return (
    <div className="flex w-full flex-col bg-gradient-to-r  from-zinc-900 to-zinc-950">
      <main className="m-auto flex min-h-screen w-full max-w-[80rem] items-center justify-center px-4 py-24">
        <section className="flex w-full max-w-[40rem] flex-col gap-8">
          <h2 className="text-center text-2xl text-gray-100">
            Acesse a sua conta
          </h2>

          <div className="flex w-full flex-col gap-4 rounded-md border-[1px] border-red-500 bg-zinc-800 p-8">
            <div className="flex flex-col gap-4">
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
            </div>

            <div className="flex flex-col items-start justify-center gap-4">
              <Button>Entrar</Button>
              <Link href="#" className="text-md text-gray-100 hover:opacity-80">
                Não possuo uma conta, quero criar!
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
