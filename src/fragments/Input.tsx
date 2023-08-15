'use client'

import { Eye, EyeSlash } from 'phosphor-react'
import { InputHTMLAttributes, useEffect, useState } from 'react'

interface IInputProps
  extends InputHTMLAttributes<Omit<HTMLInputElement, 'type'>> {
  labelText?: string
  inputType?: HTMLInputElement['type']
}

export const Input = ({
  labelText,
  inputType = 'text',
  ...props
}: IInputProps) => {
  const [passwordIsHidden, setPasswordIsHidden] = useState(true)

  const handleToggleHidePassword = () => {
    setPasswordIsHidden(!passwordIsHidden)
  }

  return (
    <div>
      {labelText && (
        <label htmlFor={props.id} className="text-md text-gray-200">
          {labelText}
        </label>
      )}

      {inputType !== 'password' && (
        <input
          className="mt-2 w-full rounded-md border-[1px] border-gray-400 bg-zinc-950 p-4 text-gray-200 outline-none focus:border-red-600"
          {...props}
        />
      )}

      {inputType === 'password' && (
        <div className="mt-2 w-full rounded-md border-[1px] border-gray-400 bg-zinc-950 p-4 text-gray-200 outline-none focus:border-red-600">
          <input
            className="w-full"
            type={passwordIsHidden ? 'password' : 'text'}
            {...props}
          />

          <button onClick={handleToggleHidePassword}>
            {passwordIsHidden ? <Eye /> : <EyeSlash />}
          </button>
        </div>
      )}
    </div>
  )
}
