<<<<<<< HEAD
"use client"

import { Eye, EyeSlash } from "phosphor-react";
import { useState, InputHTMLAttributes } from "react";

interface IInputProps extends InputHTMLAttributes<HTMLInputElement>  {
    labelText: string;
    inputType: string;
}

export const Input = ({ labelText, inputType, ...props }: IInputProps) => {
    const [showPassword, setShowPassword] = useState(false)

    const handleTogglePasswordVisibility = () => {
        setShowPassword(!showPassword)
    }

    return (
        <div>
            <label htmlFor={props.id} className="text-md text-gray-200">{labelText}</label>
            
            {inputType === "password" && 
            <div className="flex mt-2 w-full bg-zinc-950 text-gray-200 border-[1px] outline-none border-gray-400 rounded-md focus-within:border-red-600">
                <input type={showPassword ? "text" : "password"} className="w-full h-full p-4 bg-transparent border-none outline-none" {...props} />
                <button className="p-4 text-gray-200 text-2xl" onClick={handleTogglePasswordVisibility}>{showPassword ? <EyeSlash /> : <Eye />}</button>
            </div>}

            {inputType !== "password" && <input type={inputType} className="mt-2 w-full p-4 bg-zinc-950 text-gray-200 border-[1px] outline-none border-gray-400 rounded-md focus:border-red-600" {...props} />}
=======
import { InputHTMLAttributes } from "react";

interface IInputProps extends InputHTMLAttributes<HTMLInputElement>  {
    labelText: string;
}

export const Input = ({ labelText, ...props }: IInputProps) => {
    return (
        <div>
            <label htmlFor={props.id} className="text-md text-gray-200">{labelText}</label>
            <input className="mt-2 w-full p-4 bg-zinc-950 text-gray-200 border-[1px] outline-none border-gray-400 rounded-md focus:border-red-600" {...props} />
>>>>>>> d144690c975bd56eb5f700a5fd9d3bb6b8397d90
        </div>
    )
}