import { FC } from 'react'
import { S } from './style'

interface ModalProps {
  children: React.ReactNode
}

const Modal: FC<ModalProps> = ({ children }) => {
  return (
    <S.Modal>
      {children}
    </S.Modal>
  )
}

export default Modal