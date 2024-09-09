import React, { useRef } from 'react'
import imgSrc from '../images/HD-wallpaper-640x480px-cartoons-happy-meadow-minions.jpg'
import { FaHeart } from "react-icons/fa";
import { LuHeartCrack } from "react-icons/lu";
import gsap from 'gsap';
import { useNavigate } from 'react-router-dom';
import { useBooleanContext } from '../ContextAPI';

const Home: React.FC = () => {
    const btnEl = useRef(null)
    const btnYes = useRef(null)
    const {  toggleValue } = useBooleanContext();

    function mininizeBtn() {
        const currentScale = gsap.getProperty(btnEl.current, "scale") as number;
        const currentScaleofYes = gsap.getProperty(btnYes.current, "scale") as number;
        
        console.log(currentScale)

        if(currentScale > 0.3) {
            gsap.to(btnEl.current, {
                scale: currentScale - 0.1, 
                duration: 0.5, 
                ease: "bounce"
            });
            gsap.to(btnYes?.current, {
                scale: currentScaleofYes + 0.1, 
                duration: 0.5, 
                ease: "bounce"
            });
        } else {
            gsap.to(btnEl.current, {
                display: 'none'
            });
        }
    }

    const nav = useNavigate()
    return (
        <div className='hp'>
            <h1>DO YOU LOVE ME? :(</h1>
            <div className='imgCol'>
                <img src={imgSrc} alt="" />
            </div>
            <div className='btnCon'>
                <button
                ref={btnYes}
                onClick={() => {toggleValue(); nav('/click/yes')}}
                ><span><FaHeart className='icn' style={{color: 'red',}} /> </span>Yes</button>
                <button
                onClick={() => {mininizeBtn()}}
                 ref={btnEl}><span><LuHeartCrack className='icn' style={{color: 'red'}} /></span>No</button>
            </div>
        </div>
    )
}

export default Home
