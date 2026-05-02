import { useEffect, useRef, useState } from "react"
import { hightlightsSlides } from "../constants"
import { pauseImg, playImg, replayImg } from "../utils"


import gsap from 'gsap';
import { useGSAP } from '@gsap/react';


const VideoCarousel = () => {

  const videoRef = useRef([])
  const progressRef = useRef([])

  const [currentVideo, setCurrentVideo] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isEnded, setIsEnded] = useState(false);

  useEffect(() => {
    const video = videoRef.current[currentVideo];
    if (!video) return;

    if (isPlaying) {
      video.play();
    } else {
      video.pause();
    }
  }, [currentVideo, isPlaying])

  useEffect(() => {
  const video = videoRef.current[currentVideo];
  const progressBar = progressRef.current[currentVideo];

  if (!video || !progressBar) return;

  // reset ONLY on video change
  progressRef.current.forEach((bar) => {
    if (bar) gsap.set(bar, { width: "0%" });
  });

  const updateProgress = () => {
    const progress = (video.currentTime / video.duration) * 100;

    gsap.set(progressBar, {
      width: `${progress}%`
    });
  };

  video.addEventListener("timeupdate", updateProgress);

  return () => {
    video.removeEventListener("timeupdate", updateProgress);
  };

}, [currentVideo]);


  function handleEnded() {
    if (currentVideo < hightlightsSlides.length - 1) {
      setCurrentVideo((prev) => prev + 1);
    } else {
      setIsEnded(true);
      setIsPlaying(false);
    }
  }

  function handleControl() {
    if (isEnded) {
      setCurrentVideo(0);
      setIsEnded(false);
      setIsPlaying(true);
    } else {
      setIsPlaying((prev) => !prev)
    }
  }

  useGSAP(() => {

    gsap.to('#slider', {
      transform: `translateX(${-100 * currentVideo}%)`,
      duration: 2,
      ease: 'power2.inOut'
    })
  }, [currentVideo])

  return (
    <>
      <div className="flex items-center">
        {hightlightsSlides.map((list, i) => (
          <div key={list.id} id="slider" className="sm:pr-20 pr-10">
            <div className="video-carousel_container">
              <div className="w-full h-full flex-center rounded-3xl  overflow-hidden bg-black">
                <video
                  id="video"
                  className={`${list.id === 2 && 'translate-x-44'}  pointer-events-none`}
                  playsInline={true}
                  preload="auto"
                  muted
                  onEnded={handleEnded}
                  ref={(el) => (videoRef.current[i] = el)}
                >
                  <source src={list.video} type="video/mp4" />
                </video>
              </div>

              <div className="absolute top-12 left-[5%] z-10">
                {list.textLists.map((text) => (
                  <p className="md:text-2xl text-xl font-medium" key={text}>{text}</p>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="relative flex-center mt-10">

        <div className="flex-center py-5 px-7 bg-gray-300 backdrop-blur rounded-full">

          {hightlightsSlides.map((_, i) => (
            <div
              key={i}
              className={`h-3 mx-2 rounded-full overflow-hidden transition-all duration-300 ${i === currentVideo
                ? "w-20 bg-gray-500"
                : "w-3 bg-gray-500"
                }`}
            >
              {/* only render progress for active */}
              {i === currentVideo && (
                <div
                  ref={(el) => (progressRef.current[i] = el)}
                  className="h-full bg-white"
                />
              )}
            </div>
          ))}

          <button className="control-btn" onClick={handleControl}>
            <img src={
              isEnded
                ? replayImg
                : isPlaying
                  ? pauseImg
                  : playImg
            } />
          </button>
        </div>
      </div>
    </>
  )
}

export default VideoCarousel