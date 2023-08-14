import { ButtonHTMLAttributes, ReactNode } from "react";

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode
}

export const Button = ({ children, ...props }: IButtonProps) => {
    return (
        <button className="w-full p-4 text-gray-100 bg-red-600 rounded-md hover:bg-red-700 transition-all duration-400" {...props}>{children}</button>
    )
}