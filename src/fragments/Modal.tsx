import * as RadixModal from '@radix-ui/react-dialog'
import { ReactNode } from 'react'

interface IModalProps {
  title?: string
  description?: string
  componentTrigger: ReactNode
  children: ReactNode
}

export const Modal = ({
  componentTrigger,
  title = '',
  description = '',
  children,
}: IModalProps) => {
  return (
    <RadixModal.Root>
      <RadixModal.Trigger asChild>{componentTrigger}</RadixModal.Trigger>
      <RadixModal.Portal>
        <RadixModal.Overlay />
        <RadixModal.Content>
          <RadixModal.Title>{title}</RadixModal.Title>
          <RadixModal.Description>{description}</RadixModal.Description>
          <RadixModal.Close />

          {children}
        </RadixModal.Content>
      </RadixModal.Portal>
    </RadixModal.Root>
  )
}
