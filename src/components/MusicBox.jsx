import React from 'react'
import sounds from '../sounds'


export default function MusicBox({code , sound , index}) {
  
  const handleClick = ()=>{
    let path = sounds[index]['file']
    let audio = new Audio(path)
    audio.play()
  }

  return (
    <div className="box" onClick={handleClick}>
      <p className="key">{code}</p>
      <p className="sound">{sound}</p>
    </div>
  )
}