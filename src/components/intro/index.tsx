import { FC, useState, useEffect } from 'react'
import { S } from './style'
import memoryGameImg from '../assets/gamesImg/memoryGame.png'
import durakGameImg from '../assets/gamesImg/durakGame.png'
import ticTacToeGameImg from '../assets/gamesImg/ticTacToeGame.png'
import { bindedPageVariants } from '../common/framerMotionVariants'
import memoryIcon from '../assets/gamesIcon/memory.png'
import cardsIcon from '../assets/gamesIcon/cards.svg'
import ticTacToeIcon from '../assets/gamesIcon/ticTacToe.svg'
import { useSwipeable } from 'react-swipeable'

const gameLinks = [
  { id: 0, link: '/memoryGame', gameImg: memoryGameImg, title: 'Memory Game', decorIcon: memoryIcon },
  { id: 1, link: '/durakGame', gameImg: durakGameImg, title: 'Durak Game', decorIcon: cardsIcon },
  { id: 2, link: '/ticTacToeGame', gameImg: ticTacToeGameImg, title: 'Tic Tac Toe Game', decorIcon: ticTacToeIcon },
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
          <S.IntroInner>
            <S.GamesCards
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
                <S.GameCard
                  animate={isMobile ? { scale: id === currentSlide ? 1 : 0.9 } : undefined}
                  key={id}>
                  <S.GameLink to={link} key={id}>
                    <S.GameImg src={gameImg} alt={title} />
                    <S.GameTitle>{title}</S.GameTitle>
                    <S.Decor><img src={decorIcon} /></S.Decor>
                  </S.GameLink>
                </S.GameCard>
              ))}
            </S.GamesCards>
          </S.IntroInner>
        </S.Intro>
      )}
    </>
  )
}

export default Intro