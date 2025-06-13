"use client"

import styles from './index.module.css';

import { BsFillPlayFill, BsPauseFill } from 'react-icons/bs';
import { useEffect, useRef, useState } from 'react';

export function Intro() {
  const [playVideo, setPlayVideo] = useState(false);

  const videoRef = useRef<HTMLVideoElement>(null);

  function videoPause() {
    videoRef.current!.pause()
    setPlayVideo(state => !state)
  } 
  
  function handleVideo() {
    setPlayVideo(state => !state)
  }
  
  useEffect(() => {
    const video = videoRef.current!
    
    if(playVideo) {
      video.play()
      video.addEventListener('ended', videoPause)
    }

    return () => {
      video.removeEventListener('ended', videoPause)
      video.pause()
    }
    
  }, [playVideo])


  return (
    <section className={styles.video}>
      <video ref={videoRef} controls={false} muted>
        <source src="/assets/meal.mp4" type="video/mp4" />
        Your browser doesn't support the video tag.
      </video>

      <div className={`${styles.overlay} flex-center`}>
        <div className={`${styles['overlay-circle']} flex-center`} onClick={handleVideo}>
          {playVideo ? (
            <BsPauseFill color="#FFF" fontSize={30} />
          ) : (
            <BsFillPlayFill color="#FFF" fontSize={30} />
          )}
        </div>
      </div>
    </section>
  )
}