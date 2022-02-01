import React, { useEffect } from 'react'
import { Icon } from '@iconify/react';
import Aos from 'aos';



export default function StartGame(props) {
    const { ShuffelCardes } = props;
// useEffect(()=>{
//     Aos.init()
// })

    return (
        <div className='static h-screen ' >

            <div className='p-20 grid justify-items-center h-full opacity-60 bg-accent-dark bg-cover' style={{ backgroundImage: "url('https://wallpaperaccess.com/full/2825704.gif')" }}>

                <div data-aos-delay="1000" data-aos="fade-right" className=' text-8xl h-36 line-height-none mb-10'>Memory <span data-aos-delay="2000" data-aos="fade-left">Game</span>  </div>
                <div className=' text-5xl text-white line-height-none'>
                    Train Your Brain
                </div>
                <span className='text-2xl text-white'>Press Start  Game To Play</span>

                <div class="animate-bounce w-16 h-3">
                    <Icon icon="akar-icons:arrow-down" color="#058" width="32" height="32" />
                </div>
                <button className='' >

                    <img onClick={ShuffelCardes}
                        className=' h-36 '
                        src='https://cdnb.artstation.com/p/assets/images/images/033/575/083/original/truong-huynh-siffert-tiffany-buttons-startgame-yellow.gif?1609984515' /></button>

            </div>


        </div>
    )
}