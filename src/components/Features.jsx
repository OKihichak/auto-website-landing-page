import gsap from 'gsap';
import { useGSAP } from '@gsap/react';


import { ScrollTrigger } from 'gsap/all';
import { useRef, useState } from 'react'
import { exploreFirst, exploreSecond, muteImg, speedVideo, unmuteImg } from '../utils';

gsap.registerPlugin(ScrollTrigger);

const Features = () => {

    const [isMuted, setIsMuted] = useState(true);

    const videoRef = useRef();

    useGSAP(() => {

        gsap.to('#exportVideo', {
            scrollTrigger: {
                trigger: '#exportVideo',
                toggleActions: 'play pause reverse restart',
                start: '-10% bottom',
            },
            onComplete: () => {
                videoRef.current.play();
            }
        })



        gsap.to('.g-grow', {
            scale: 1,
            opacity: 1,
            ease: 'power1',
            scrollTrigger: {
                trigger: '.g-grow',
                toggleActions: 'restart reverse restart reverse',
                start: 'top 85%',
                scrub: 5.5
            }
        })

        gsap.to('.stat', {
            y: 0,
            opacity: 1,
            ease: 'power2.inOut',
            duration: 1,
            scrollTrigger: {
                trigger: '.stat',
                toggleActions: 'restart reverse restart reverse',
                start: 'top 85%',
            }
        })


    }, [])


    function toggleAudio() {
        if (!videoRef.current) return

        const newMuted = !isMuted
        videoRef.current.muted = newMuted
        setIsMuted(newMuted)
    }



    return (
        <section className='h-full common-padding bg-zinc overflow-hidden'>
            <div className='screen-max-width'>


                <div className='flex flex-col justify-center items-center overflow-hidden'>
                    <div className='flex justify-center w-full  mb-24'>
                        <h2 className='text-5xl lg:text-7xl font-semibold'>Der Weg zur Perfektion.</h2>
                        
                        <img
                            className='border rounded-full control-btn cursor-pointer'
                            width={75}
                            height={75}
                            src={isMuted ? unmuteImg : muteImg}
                            onClick={toggleAudio}
                        />
                    </div>

                    <div className='flex-center flex-col sm:px-10'>
                        <div className='relative h-[50vh] w-full flex items-center'>
                            <video playsInline id='exportVideo'
                                className='w-full h-full object-cover object-center'
                                preload='none'
                                autoPlay
                                muted
                                ref={videoRef}
                            >
                                <source src={speedVideo} type='video/mp4' />
                            </video>
                        </div>

                        <div className='flex flex-col w-full relative'>
                            <div className='feature-video-container'>
                                <div className='overflow-hidden flex-1 h-[50vh]'>
                                    <img src={exploreFirst} alt='engine' className='feature-video g-grow' />
                                </div>

                                <div className='overflow-hidden flex-1 h-[50vh]'>
                                    <img src={exploreSecond} alt='engine' className='feature-video g-grow' />
                                </div>
                            </div>

                            
                                <div className='flex flex-col sm:flex-row bg-zinc-800 rounded-2xl overflow-hidden'>

                                    {/* Leistung */}
                                    <div className='flex-1 flex flex-col items-center justify-center py-10 border-b sm:border-b-0 sm:border-r border-gray-700 stat opacity-0'>
                                        <p className='text-sm text-gray-400 mb-2'>Leistung</p>
                                        <div className='flex items-baseline gap-2'>
                                            <span className='text-5xl font-semibold text-white'>441</span>
                                            <span className='text-gray-400'>kW (600 PS)</span>
                                        </div>
                                    </div>

                                    {/* Beschleunigung */}
                                    <div className='flex-1 flex flex-col items-center justify-center py-10 border-b sm:border-b-0 sm:border-r border-gray-700 stat opacity-0'>
                                        <p className='text-sm text-gray-400 mb-2'>Beschleunigung (0–100 km/h)</p>
                                        <div className='flex items-baseline gap-2'>
                                            <span className='text-5xl font-semibold text-white'>3,6</span>
                                            <span className='text-gray-400'>Sek.</span>
                                        </div>
                                    </div>

                                    {/* Drehmoment */}
                                    <div className='flex-1 flex flex-col items-center justify-center py-10 stat opacity-0'>
                                        <p className='text-sm text-gray-400 mb-2'>Drehmoment maximal</p>
                                        <div className='flex items-baseline gap-2'>
                                            <span className='text-5xl font-semibold text-white'>800</span>
                                            <span className='text-gray-400'>Nm</span>
                                        </div>
                                    </div>

                                </div>
                            
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Features