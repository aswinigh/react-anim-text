import React from 'react'

import  {LetterFlow, GrowText}  from 'react-anim-text'
import 'react-anim-text/dist/index.css'

const text = "Hello";
const textList = ["Animated"];
const App = () => {
  return(
    <div>
    
    <GrowText textList = {textList} duration={1}/>
    </div>
    );
}

export default App
