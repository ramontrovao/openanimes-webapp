import { PropsWithRef, forwardRef } from 'react'

interface ISelectProps extends PropsWithRef<JSX.IntrinsicElements['select']> {
  labelText?: string
  options: string[]
}

export const Select = forwardRef<HTMLSelectElement, ISelectProps>(
  function SelectComponent({ labelText, options, ...rest }, ref) {
    return (
      <div>
        {labelText && (
          <label
            htmlFor={rest.id}
            className="text-md mb-2 block font-bold text-gray-200"
          >
            {labelText}
          </label>
        )}
        <select
          ref={ref}
          className="block w-full rounded-lg border border-red-500 bg-zinc-900 p-2 text-sm text-gray-200 focus:border-red-600 focus:ring-red-600"
          {...rest}
        >
          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
    )
  },
)
