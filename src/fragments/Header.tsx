import Image from 'next/image'

export const Header = () => {
  return (
    <header className="fixed z-20 flex min-h-[5rem] w-full items-center justify-center">
      <div className="m-auto w-full max-w-[80rem] p-4">
        <div className="flex w-full items-center gap-4">
          <Image
            className="h-16 w-16"
            src="/logo.png"
            width={400}
            height={400}
            alt=""
          />
          <h1 className="text-2xl font-bold text-red-600">Open Animes</h1>
        </div>
      </div>
    </header>
  )
}
