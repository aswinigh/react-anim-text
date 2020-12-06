import React from 'react'

import  {LetterFlow, GrowText}  from 'react-anim-text'
import 'react-anim-text/dist/index.css'

const text = "Hello";
const textList = ["Animated", "Text", "Here"];
const App = () => {
  return(
    <div>
     <LetterFlow text = {text} duration ={1500} />
    <GrowText textList = {textList} duration={3000}/>
    </div>
    );
}

export default App
