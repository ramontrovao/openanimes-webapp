import Link from "next/link";
import { Input } from "@fragments/Input"
import { Button } from "@fragments/Button";

export default function Home() {
  return (
    <div className="w-full from-zinc-900 to-zinc-950 bg-gradient-to-r  flex flex-col">
      <main className="w-full max-w-[80rem] m-auto px-4 py-24 flex justify-center items-center min-h-screen">
        <section className="w-full max-w-[40rem] flex flex-col gap-8">
          <h2 className="text-2xl text-gray-100 text-center">Acesse a sua conta</h2>

          <div className="w-full flex flex-col gap-4 bg-zinc-800 border-[1px] border-red-500 rounded-md p-8">
            <div className="flex flex-col gap-4">
<<<<<<< HEAD
              <Input labelText="Seu e-mail" id="email-field" inputType="email" placeholder="irmaosdoforro@gmail.com" />

              <Input labelText="Sua senha" id="password-field" inputType="password" placeholder="AbubLeble1234598!@#" />
=======
              <Input labelText="Seu e-mail" id="email-field" type="email" placeholder="irmaosdoforro@gmail.com" />

              <Input labelText="Sua senha" id="password-field" type="password" placeholder="AbubLeble1234598!@#" />
>>>>>>> d144690c975bd56eb5f700a5fd9d3bb6b8397d90
            </div>

            <div className="flex flex-col justify-center items-start gap-4">
              <Button>Entrar</Button>
              <Link href="#" className="text-md text-gray-100 hover:opacity-80">Não possuo uma conta, quero criar!</Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
