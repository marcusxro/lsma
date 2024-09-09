import { useEffect, useRef } from 'react'
import musicSrc from '../src/assets/cancion parararitururaparararira _ Turnaround Reprise - El Principito _ Tiktok Song (Best part).mp3'
import { useBooleanContext } from './ContextAPI'

const Song = () => {
    const audioRef = useRef<HTMLAudioElement>(null)

    const { value,  } = useBooleanContext();


    useEffect(() => {
        console.log(value)
    }, [value])

    useEffect(() => {
        if (audioRef.current) {
            audioRef.current.loop = true;
            if (value) {
              audioRef.current.play();
            } else {
              audioRef.current.pause();
            }
          }
    }, [value])



     
  return (
    <audio ref={audioRef} src={musicSrc} />
  )
}

export default Song
