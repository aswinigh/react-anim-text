import React from 'react'

import  {GrowText}  from 'react-anim-text'
import 'react-anim-text/dist/index.css'

const textArray = ["Animated", "Text", "Here"]
const App = () => {
  return <GrowText textList = {textArray} duration ={4000} />
}

export default App
