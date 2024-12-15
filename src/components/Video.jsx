import { useRef, useEffect } from "react";

export default function Video({ src, isPlaying }) {
    const ref = useRef(null);
  
    useEffect(() => {
      if (ref.current) {
        if (isPlaying) {
          ref.current.play();
        } else {
          ref.current.pause();
        }
      }
    }, [isPlaying]);
  
    return <video ref={ref} src={src} loop playsInline />;
  }
  
