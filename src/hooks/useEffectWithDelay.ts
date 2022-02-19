import { useEffect } from 'react'
import { ActionCreatorsTypes } from '../actions/durak/durakActionCreators'

const useEffectWithDelay = (
  dispatch: React.Dispatch<ActionCreatorsTypes>,
  action: () => ActionCreatorsTypes,
  dependency: any
) => {
  useEffect(() => {
    if (dependency) {
      const timeout = setTimeout(() => dispatch(action()), 1000)
      return () => clearTimeout(timeout)
    }
  }, [dependency])
}

export default useEffectWithDelay