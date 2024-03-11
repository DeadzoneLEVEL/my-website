import {useRef, useEffect} from 'react'
import '../App.css';

let getAlphabet = () => {
  return Math.floor(Math.random() * 2)
}

let getNextSpawnTime = () => {
  return Date.now() + Math.floor(Math.random() * 500)
}

let respawn = () => {
  return {
    Text: getAlphabet(),
    Height: -1,
    WaitTime: getNextSpawnTime(),
  }
}

const Canvas = props => {
  const ref = useRef()

  let fontSize = 10
  let columns
  let binaryText = {}

  const draw = (context) => {    
    let canvas = context.canvas
    // canvas.width = window.innerWidth
    // columns = context.canvas.width / fontSize

    context.fillStyle = "rgba(50, 50, 50, 0.25)"
    context.fillRect(0, 0, canvas.width, canvas.height);

    context.fillStyle = "darkorange"
    context.font = fontSize + "px monospace" 

    for (let i = 0; i < columns ; i++) {
      let info = binaryText[i]

      if (info == undefined)
        continue;

      if (Date.now() <= info.WaitTime)
        continue;

      context.fillText(info.Text, i * fontSize, info.Height * fontSize)
      info.Height += 1
      info.Text = getAlphabet()
      
      if (info.Height * fontSize >= canvas.height + fontSize)
        binaryText[i] = respawn()
    }
  }

  useEffect(() => {
    const canvas = ref.current
    const context = canvas.getContext('2d')    

    columns = context.canvas.width / fontSize

    for (let i = 0; i < columns; i++)
      binaryText[i] = respawn()

    // renderer()
    setInterval(() => {
      draw(context)
    }, 120)

    return
  }, [])

  return <canvas ref={ref} {...props}/>
}

export default Canvas