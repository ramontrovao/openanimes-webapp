import * as RadixModal from '@radix-ui/react-dialog'
import { ReactNode } from 'react'

interface IModalProps {
  title?: string
  description?: string
  children: ReactNode

  triggerComponent: ReactNode
  closeComponent: ReactNode

  onOpenChange?: () => unknown
}

export const Modal = ({
  title = '',
  description = '',
  triggerComponent,
  onOpenChange = () => {},
  closeComponent,
  children,
}: IModalProps) => {
  return (
    <RadixModal.Root onOpenChange={onOpenChange}>
      <RadixModal.Trigger asChild>{triggerComponent}</RadixModal.Trigger>

      <RadixModal.Portal>
        <RadixModal.Overlay className="fixed left-[50%] top-[50%] z-50 flex min-h-[100vh] min-w-[100vw] translate-x-[-50%] translate-y-[-50%] items-center justify-center bg-black bg-opacity-60">
          <RadixModal.Content className="relative h-full max-h-[35rem] w-full max-w-[40rem] overflow-y-scroll rounded-md bg-zinc-900  p-8">
            <header className="flex items-center justify-between bg-zinc-900">
              <RadixModal.Title className="text-2xl font-bold text-gray-100">
                {title}
              </RadixModal.Title>

              <RadixModal.Close className="text-gray-100">
                {closeComponent}
              </RadixModal.Close>
            </header>

            {description && (
              <RadixModal.Description>{description}</RadixModal.Description>
            )}

            {children}
          </RadixModal.Content>
        </RadixModal.Overlay>
      </RadixModal.Portal>
    </RadixModal.Root>
  )
}
