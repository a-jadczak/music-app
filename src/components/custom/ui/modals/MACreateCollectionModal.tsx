import { Dialog, DialogContent } from '@/components/ui/dialog'
import type { FC } from 'react'
interface ModalProps {
  open: boolean
  onOpenChange: (value: boolean) => void
  children?: React.ReactNode
}

const MACreateCollectionModal: FC<ModalProps> = ({open, onOpenChange, children}) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className=""
        onInteractOutside={(e) => e.preventDefault()} // block clicking out of modal
      >
        {children}
      </DialogContent>
    </Dialog>
  )
}

export default MACreateCollectionModal