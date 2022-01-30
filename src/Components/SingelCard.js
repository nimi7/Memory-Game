
import React, { useEffect } from 'react'
import Back from '../Pics/Back.png'
import Aos from 'aos';
import './SingleCard.css'
export default function SingleCard(props) {
    const { picture, handleChoice, flipped, disabled } = props;

    useEffect(()=>{
        Aos.init();
    })
    const handleClick = () => {
        if (!disabled) {
            handleChoice(picture)
        }



    }

    return (
        <div data-aos-delay="500" data-aos={picture.anime} className='card ml-2 md:ml-none' key={picture.id}>
            <div className={flipped ? "flipped " : ""}>
                <img className="front    " src={picture.pic} alt='card front' />
                <img
                    onClick={handleClick}
                    className="back "
                    src={Back}
                    alt='card back' />
            </div>
        </div>
    )
}