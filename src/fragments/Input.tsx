'use client'

import { Eye, EyeSlash } from 'phosphor-react'
import {
  InputHTMLAttributes,
  useEffect,
  useState,
  forwardRef,
  PropsWithRef,
} from 'react'
import { UseFormRegister, FieldValues } from 'react-hook-form'

interface IInputProps extends PropsWithRef<JSX.IntrinsicElements['input']> {
  labelText?: string
  inputType?: HTMLInputElement['type']
  errorText?: string
}

export const Input = forwardRef<HTMLInputElement, IInputProps>(
  function InputComponent(
    { labelText, inputType = 'text', errorText, ...rest },
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

        {inputType !== 'password' && (
          <input
            className="w-full rounded-md border-[1px] border-gray-400 bg-zinc-950 p-4 text-gray-200 outline-none focus:border-red-600"
            ref={ref}
            {...rest}
          />
        )}

        {inputType === 'password' && (
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

        {errorText && (
          <strong className="text-md mt-2 text-red-700">{errorText}</strong>
        )}
      </div>
    )
  },
)
