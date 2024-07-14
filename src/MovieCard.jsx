import React from "react";
import ReactPlayer from 'react-player';
import { useRef } from "react";
import { useEffect } from "react";
export default function MovieCard(){
    const videoEl = useRef(null);

  const attemptPlay = () => {
    videoEl &&
      videoEl.current &&
      videoEl.current.play().catch(error => {
        console.error("Error attempting to play", error);
      });
  };

  useEffect(() => {
    attemptPlay();
  }, []);

    return(<>
    <div className="w-[100%] mt-2">
    <video autoPlay className="w-[100%] h-[600px]" loop muted>
  <source  src="netflixcard.mp4" type="video/mp4" />
     </video>
        </div>
    </>)

}