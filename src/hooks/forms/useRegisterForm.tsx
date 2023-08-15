import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

type TRegisterForm = {
  name: string
  email: string
  password: string
  confirmPassword: string
}

export const useRegisterForm = () => {
  const registerFormSchema = z.object({
    email: z
      .string()
      .regex(
        /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/,
        'Digite um email válido',
      ),
    password: z.string(),
  })

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TRegisterForm>({
    mode: 'onSubmit',
    resolver: zodResolver(registerFormSchema),
  })

  return { register, handleSubmit, errors }
}
