import { FC } from 'react'
import pageNotFound from '../assets/pageNotFound.svg'
import { bindedPageVariants } from '../common/framerMotionVariants'
import { S } from './style'

const NotFound: FC = () => {
  return (
    <S.NotFound {...bindedPageVariants}>
      <S.NotFoundImg src={pageNotFound} alt='Page Not Found' />
      <S.NotFoundLink to='/'>Home</S.NotFoundLink>
    </S.NotFound>
  )
}

export default NotFound