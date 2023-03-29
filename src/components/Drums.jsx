import React, { useEffect } from 'react'
import MusicBox from './MusicBox'
import sounds from '../sounds'


function Drums() {

    const handleKeyPress = (event) => {
        const sound = sounds.find((s) => s.key === event.key);
        if (sound) {
            const audio = new Audio(sound.file);
            audio.play();
        }
    }
      
      useEffect(() => {
        window.addEventListener("keypress", handleKeyPress)
        return () => {
          window.removeEventListener("keypress", handleKeyPress)
        }
      }, [])

  return (
    <div className="drums">
      <MusicBox code="A" sound="Clap" index={0}  />
      <MusicBox code="S" sound="Hihat" index={1}  />
      <MusicBox code="D" sound="Kick" index={2}  />
      <MusicBox code="F" sound="Openhat" index={3}  />
      <MusicBox code="G" sound="Boom" index={4} />
      <MusicBox code="H" sound="Ride" index={5}  />
      <MusicBox code="J" sound="Snare" index={6}  />
      <MusicBox code="K" sound="Tom" index={7}  />
      <MusicBox code="L" sound="Tink"  index={8} />

   </div>
  )
}

export default Drums