import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollToPlugin } from "gsap/ScrollToPlugin";


import { useEffect, useState } from 'react'
import { heroVideo, smallHeroVideo } from '../utils';

const Hero = () => {

    gsap.registerPlugin(ScrollToPlugin);

    const [videoSrc, setVideoSrc] = useState(window.innerWidth < 760 ? smallHeroVideo : heroVideo)

    function handleVideoSrc() {
        if (window.innerWidth < 760) {
            setVideoSrc(smallHeroVideo)
        } else {
            setVideoSrc(heroVideo)
        }
    }

    useEffect(() => {
        window.addEventListener('resize', handleVideoSrc)

        return () => {
            window.removeEventListener('resize', handleVideoSrc)
        }
    }, [])


    useGSAP(() => {
        gsap.to('#hero', { opacity: 1, delay: 2 }),
            gsap.to('#cta', { opacity: 1, y: -50, delay: 2 })
    }, [])

    return (
        <section className='w-full nav-height bg-black relative'>
            <div className='h-5/6 w-full flex-center flex-col'>
                <p id='hero' className='hero-title'>RS Series </p>
                <div className='md:w-10/12 w-9/12'>
                    <video className='pointer-events-none w-full h-[60vh] object-cover' autoPlay muted playsInline={true}>
                        <source src={videoSrc} type='video/mp4' />
                    </video>
                </div>
            </div>

            <div id="cta" className='flex flex-col items-center opacity-0 translate-y-20'>
                <button
                    className='btn'
                    onClick={() => {
                        gsap.to(window, {
                            duration: 1,
                            scrollTo: "#highlights",
                            ease: "power2.out"
                        })
                    }}
                >
                    Konfigurieren
                </button>
                <p className='font-normal text-xl'>600 PS. Quattro. Keine Kompromisse.</p>
            </div>
        </section>
    )
}

export default Hero