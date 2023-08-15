import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

type TRegisterForm = {
  username: string
  email: string
  password: string
  confirmPassword: string
}

export const useRegisterForm = () => {
  const registerFormSchema = z
    .object({
      username: z
        .string()
        .nonempty('Esse campo é obrigatório')
        .min(4, 'O username precisa ter no mínimo 4 caracteres')
        .max(15, 'O username pode ter no máximo 15 caracteres')
        .regex(/^[a-z]+$/, 'O username só pode ter letras minúsculas'),
      email: z
        .string()
        .nonempty('Esse campo é obrigatório')
        .regex(
          /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/,
          'Digite um email válido',
        ),
      password: z
        .string()
        .nonempty('Esse campo é obrigatório')
        .min(8, 'A senha precisa ter no mínimo 8 dígitos')
        .regex(
          /^(?=.*[A-Za-z])(?=.*\d).+$/,
          'A senha deve ter letras e números',
        ),
      confirmPassword: z.string().nonempty('Esse campo é obrigatório'),
    })
    .refine(({ password, confirmPassword }) => password === confirmPassword, {
      message: 'As senhas precisam ser iguais',
      path: ['confirmPassword'],
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
