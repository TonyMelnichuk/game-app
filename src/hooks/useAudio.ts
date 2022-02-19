import { useState, useEffect } from 'react'

const useAudio = (url: string): () => void => {
  const [audio] = useState(new Audio(url))
  const [isPlaying, setIsPlaying] = useState(false)

  const handleStartPlaying = () => {
    setIsPlaying(true)
  }

  useEffect(() => {
    isPlaying ? audio.play() : audio.pause()
  }, [isPlaying])

  return handleStartPlaying
}

export default useAudio
