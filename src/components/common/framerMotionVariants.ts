const pageVariants = {
  initial: { opacity: 0 },
  enter: { opacity: 1, duration: 0.4 },
  exit: {
    opacity: 0,
    transition: { duration: 0.2 }
  }
}

export const bindedPageVariants = {
  variants: pageVariants,
  initial: 'initial',
  animate: 'enter',
  exit: 'exit'
}

const svgVariants = {
  hidden: {
    opacity: 0,
    pathLength: 0,
    fill: 'rgba(230, 230, 230, 0)'
  },
  visible: {
    opacity: 1,
    pathLength: 1,
    fill: 'rgba(230, 230, 230, 1)'
  }
};

export const bindedSvgVariants = {
  variants: svgVariants,
  initial: 'hidden',
  animate: 'visible',
  transition: {
    default: { duration: .7, ease: 'easeIn' },
    fill: { duration: .7, ease: 'easeIn' }
  }
}
