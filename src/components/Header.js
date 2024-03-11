import React from 'react'
import '../App.css';
import Canvas from './HeaderCanvas.js'

function header() {
  return (
  <header>
    <h1>Hi, I'm Kevin Nguyen</h1>
     <Canvas width = {window.innerWidth} height = '85px' ></Canvas>
  </header> 
  )
}

export default header