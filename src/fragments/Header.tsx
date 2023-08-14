import Image from "next/image"

export const Header = () => {
    return (
      <header className="w-full fixed min-h-[5rem] flex justify-center items-center">
        <div className="w-full max-w-[80rem] m-auto p-4">
            <div className="w-full flex items-center gap-4">
                <Image className="w-16 h-16" src="/logo.png" width={400} height={400} alt="" />
                <h1 className="font-bold text-2xl text-red-600">Open Animes</h1>
            </div>
        </div>
      </header>
    )
}