'use client'

import { Eye, EyeSlash } from 'phosphor-react'
import { useState, forwardRef, PropsWithRef } from 'react'

interface IInputProps extends PropsWithRef<JSX.IntrinsicElements['input']> {
  labelText?: string
  inputVariant?: 'default' | 'secret'
  errorText?: string
}

export const Input = forwardRef<HTMLInputElement, IInputProps>(
  function InputComponent(
    { labelText, inputVariant = 'default', errorText, ...rest },
    ref,
  ) {
    const [passwordIsHidden, setPasswordIsHidden] = useState(true)

    const handleToggleHidePassword = () => {
      setPasswordIsHidden(!passwordIsHidden)
    }

    return (
      <div className="flex flex-col gap-2">
        {labelText && (
          <label htmlFor={rest.id} className="text-md text-gray-200">
            {labelText}
          </label>
        )}

        {inputVariant === 'default' && (
          <input
            className="w-full rounded-md border-[1px] border-gray-400 bg-zinc-950 p-4 text-gray-200 outline-none focus:border-red-600"
            ref={ref}
            {...rest}
          />
        )}

        {inputVariant === 'secret' && (
          <div className="flex w-full rounded-md border-[1px] border-gray-400 bg-zinc-950 text-gray-200 outline-none focus-within:border-red-600">
            <input
              className="w-full border-none bg-transparent p-4 outline-none"
              type={passwordIsHidden ? 'password' : 'text'}
              ref={ref}
              {...rest}
            />

            <button
              type="button"
              className="p-4 text-2xl"
              onClick={handleToggleHidePassword}
            >
              {passwordIsHidden ? <Eye /> : <EyeSlash />}
            </button>
          </div>
        )}

        <span className="text-md mt-2 text-red-400">
          {errorText && errorText}
        </span>
      </div>
    )
  },
)
