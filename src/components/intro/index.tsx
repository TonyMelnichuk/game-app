import { FC, useState, useEffect } from 'react'
import { S } from './style'
import memoryGame from '../assets/gamesImg/memoryGame.png'
import durakGame from '../assets/gamesImg/durakGame.png'
import ticTacToeGame from '../assets/gamesImg/ticTacToeGame.png'
import { bindedPageVariants } from '../common/framerMotionVariants'
import memoryImg from '../assets/gamesIcon/memory.png'
import cardsImg from '../assets/gamesIcon/cards.svg'
import ticTacToeImg from '../assets/gamesIcon/ticTacToe.svg'
import { useSwipeable } from 'react-swipeable'

const gameLinks = [
  { id: 0, link: '/memoryGame', gameImg: memoryGame, title: 'Memory Game', decorIcon: memoryImg },
  { id: 1, link: '/durakGame', gameImg: durakGame, title: 'Durak Game', decorIcon: cardsImg },
  { id: 2, link: '/ticTacToeGame', gameImg: ticTacToeGame, title: 'Tic Tac Toe Game', decorIcon: ticTacToeImg },
]

const Intro: FC = () => {
  const [currentSlide, setCurrentSlide] = useState<number>(1);
  const [isMobile, setIsMobile] = useState<boolean | null>(null)

  const handlers = useSwipeable({
    onSwipedLeft: () => {
      if (currentSlide < 2) setCurrentSlide(currentSlide + 1)

    },
    onSwipedRight: () => {
      if (currentSlide > 0) setCurrentSlide(currentSlide - 1)
    },
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
    delta: 6,
  })

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 767)

    window.addEventListener('resize', handleResize)
    handleResize()
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <>
      {typeof isMobile === 'boolean' && (
        <S.Intro {...bindedPageVariants} >
          <S.IntroTitle>Select Game</S.IntroTitle>
          <S.IntroContent>
            <S.Games
              {...handlers}
              initial={{ x: 0 }}
              animate={
                isMobile
                  ? { x: currentSlide === 0 ? '100%' : currentSlide === 1 ? '0' : '-100%' }
                  : undefined
              }
              transition={{
                type: 'spring',
                stiffness: 260,
                damping: 20,
              }}
            >
              {gameLinks.map(({ title, gameImg, link, decorIcon, id }) => (
                <S.GameWrapper animate={isMobile ? { scale: id === currentSlide ? 1 : 0.9 } : undefined}>
                  <S.GameLink to={link} key={id}>
                    <S.GameImg src={gameImg} alt={title} />
                    <S.GameTitle>{title}</S.GameTitle>
                    <S.Decor><img src={decorIcon} /></S.Decor>
                  </S.GameLink>
                </S.GameWrapper>
              ))}
            </S.Games>
          </S.IntroContent>
        </S.Intro>
      )}
    </>
  )
}

export default Intro