import React from 'react'

export default function Header({drumImg}) {
  return (
    <div className="header">
    <h1>Drum Kit </h1>
    <img src={drumImg} alt="drum-img"/>
    </div> 
  )
}
