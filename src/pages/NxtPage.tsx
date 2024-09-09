import React, { useEffect } from 'react'
import lalabs from '../images/lalabs.jpg'
import gsap from 'gsap'
const NxtPage:React.FC = () => {

    useEffect(() => {
        gsap.to('.bg', {
            opacity: 1,
            delay: 1.6
        })
    }, [])
  return (
    <div className='bg'>
        <h1>I love you my Parararitururaparararira💗✨</h1>
        <div className='imgCols'>
            <img src={lalabs} alt="" />
        </div>
    </div>
  )
}

export default NxtPage
