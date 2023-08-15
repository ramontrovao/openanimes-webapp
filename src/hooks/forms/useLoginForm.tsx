import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

type TLoginForm = {
  email: string
  password: string
}

export const useLoginForm = () => {
  const loginFormSchema = z.object({
    email: z
      .string()
      .nonempty('Esse campo é obrigatório')
      .regex(
        /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/,
        'Digite um email válido',
      ),
    password: z.string().nonempty('Esse campo é obrigatório'),
  })

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TLoginForm>({
    mode: 'onSubmit',
    resolver: zodResolver(loginFormSchema),
  })

  return { register, handleSubmit, errors }
}
