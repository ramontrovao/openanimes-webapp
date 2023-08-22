import * as RadixModal from '@radix-ui/react-dialog'
import { ReactNode } from 'react'

interface IModalProps {
  title?: string
  description?: string
  triggerComponent: ReactNode
  closeComponent: ReactNode
  children: ReactNode
}

export const Modal = ({
  title = '',
  description = '',
  triggerComponent,
  closeComponent,
  children,
}: IModalProps) => {
  return (
    <RadixModal.Root>
      <RadixModal.Trigger asChild>{triggerComponent}</RadixModal.Trigger>

      <RadixModal.Portal>
        <RadixModal.Overlay className="fixed left-[50%] top-[50%] z-50 flex min-h-[100vh] min-w-[100vw] translate-x-[-50%] translate-y-[-50%] items-center justify-center bg-black bg-opacity-60">
          <RadixModal.Content className="h-full max-h-[35rem] w-full max-w-[40rem]  bg-red-500">
            <RadixModal.Title>{title}</RadixModal.Title>
            <RadixModal.Description>{description}</RadixModal.Description>
            <RadixModal.Close>{closeComponent}</RadixModal.Close>

            {children}
          </RadixModal.Content>
        </RadixModal.Overlay>
      </RadixModal.Portal>
    </RadixModal.Root>
  )
}
