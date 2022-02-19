import { FC } from 'react'
import { motion } from 'framer-motion'
import { S } from './style'
import { bindedSvgVariants } from '../../../../common/framerMotionVariants'
import {
  ActionCreatorsTypes,
  checkWinner,
  TicTacToeMarkerType
} from '../../../../../actions/ticTacToe/ticTacToeActionCreators'
import useAudio from '../../../../../hooks/useAudio'
import soundFor0 from '../../../../assets/sounds/writing.mp3'
import soundForX from '../../../../assets/sounds/writing2.mp3'

const SVG_PATH_D_FOR_X = 'M259.41,247.998L493.754,13.654c3.123-3.124,3.123-8.188,0-11.312c-3.124-3.123-8.188-3.123-11.312,0L248.098,236.686L13.754,2.342C10.576-0.727,5.512-0.639,2.442,2.539c-2.994,3.1-2.994,8.015,0,11.115l234.344,234.344L2.442,482.342c-3.178,3.07-3.266,8.134-0.196,11.312s8.134,3.266,11.312,0.196c0.067-0.064,0.132-0.13,0.196-0.196L248.098,259.31l234.344,234.344c3.178,3.07,8.242,2.982,11.312-0.196c2.995-3.1,2.995-8.016,0-11.116L259.41,247.998z'

const SVG_PATH_D_FOR_0 = 'M190.367,0C85.23,0,0,85.23,0,190.367s85.23,190.367,190.367,190.367s190.367-85.23,190.367-190.367S295.504,0,190.367,0z M299.002,298.36c-28.996,28.996-67.57,44.959-108.634,44.959S110.723,327.35,81.733,298.36c-28.865-28.876-44.769-67.227-44.769-107.993c0-40.771,15.904-79.128,44.769-107.993c28.99-28.996,67.57-44.959,108.634-44.959c41.054,0,79.639,15.969,108.629,44.959c28.871,28.865,44.763,67.221,44.763,107.993C343.765,231.133,327.867,269.489,299.002,298.36z'

interface MarkerSvgProps {
  svgFor: TicTacToeMarkerType
  dispatch: React.Dispatch<ActionCreatorsTypes>
}

// This component is a svg for 'X' or '0'. It defines what to render depending on the value I pass 
const MarkerSvg: FC<MarkerSvgProps> = ({ svgFor, dispatch }) => {
  const defineWhatValueToUse = (valueForX: any, valueForZero: any) => {
    return svgFor === 'X' ? valueForX : svgFor === '0' ? valueForZero : null
  }

  const AUDIO = defineWhatValueToUse(soundForX, soundFor0)
  const SVG_VIEW_BOX = defineWhatValueToUse('0 0 496.096 496.096', '0 0 380.734 380.734')
  const SVG_PATH_D = defineWhatValueToUse(SVG_PATH_D_FOR_X, SVG_PATH_D_FOR_0)

  const handleStartPlayingAudio = useAudio(AUDIO)

  return (
    <S.MarkerSvg
      version='1.1'
      xmlns='http://www.w3.org/2000/svg'
      xmlnsXlink='http://www.w3.org/1999/xlink'
      x='0px'
      y='0px'
      viewBox={SVG_VIEW_BOX}
      xmlSpace='preserve'>
      <g>
        <motion.path
          {...bindedSvgVariants}
          onAnimationStart={handleStartPlayingAudio}
          onAnimationComplete={() => dispatch(checkWinner())}
          d={SVG_PATH_D} />
      </g>
    </S.MarkerSvg>
  )
}

export default MarkerSvg