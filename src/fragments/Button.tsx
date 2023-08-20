import { ButtonHTMLAttributes, ReactNode } from 'react'

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
}

export const Button = ({ children, ...props }: IButtonProps) => {
  return (
    <button
      className="duration-400 flex w-full items-center justify-center gap-4 rounded-md bg-red-600 p-4 text-lg text-gray-100 transition-all hover:bg-red-700"
      {...props}
    >
      {children}
    </button>
  )
}
