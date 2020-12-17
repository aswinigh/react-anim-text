import React from 'react'

import  {LetterAnimation, WordAnimation}  from 'react-anim-text'
import 'react-anim-text/dist/index.css'

const text = "Hello";
const textList = ["Animated", "Text"];
const easings = ["easeOutBounce","easeOutExpo","easeOutExpo"];
const App = () => {
  return(
    <div>
    
    <LetterAnimation type='flow' text = {text} duration={1}/>
    
    <WordAnimation textList = {textList} duration={2} type='growText'/>
    </div>
    );
}

export default App
