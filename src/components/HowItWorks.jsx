import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/all';


import { useRef } from 'react'
import { hisVid, rsImg } from '../utils';


gsap.registerPlugin(ScrollTrigger);

const HowItWorks = () => {

    const videoRef = useRef();


    useGSAP(() => {
        const isMobile = window.innerWidth < 640

        gsap.fromTo('#rs',
            {
                scale: isMobile ? 1.3 : 2,
                opacity: 0
            },
            {
                scale: 1,
                opacity: 1,
                ease: 'none',
                scrollTrigger: {
                    trigger: '#rs',
                    start: 'top 80%',
                    end: 'top 30%',
                    scrub: true,
                }
            }
        )

        ScrollTrigger.create({
            trigger: '.hiw-video',
            start: 'top 80%',
            end: 'bottom 20%',

            onEnter: () => videoRef.current?.play(),
            onEnterBack: () => videoRef.current?.play(),

            onLeave: () => videoRef.current?.pause(),
            onLeaveBack: () => videoRef.current?.pause(),
        })

    }, [])
    return (
        <section className='common-padding'>
            <div className='screen-max-width'>
                <div id='rs' className='flex-center w-full my-20'>
                    <img src={rsImg} alt='rs' width={180} height={180} />
                </div>

                <div className='flex flex-col items-center'>
                    <h2 className='hiw-title'>
                        Eine Geschichte der Innovation  
                        <br /> Seit Jahrzehnten an Ihrer Seite
                    </h2>
                </div>

                <div className='mt-10 md:mt-20 mb-14'>
                    <div className='relative h-full flex-center'>
                        <div className='hiw-video'>
                            <video className='pointer-events-none' playsInline preload='metadata' muted autoPlay ref={videoRef}>
                                <source src={hisVid} type='video/mp4' />
                            </video>
                        </div>
                    </div>

                    <p className='text-gray font-semibold mt-3 text-center'>RS. Im Laufe der Jahre.</p>
                </div>
            </div>
        </section>
    )
}

export default HowItWorks