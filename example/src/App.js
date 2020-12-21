import React from 'react'

import  {LetterAnimation, WordAnimation, AnimationType}  from 'react-anim-text'
import 'react-anim-text/dist/index.css'

const text = "Hello";
const textList = ["Animated", "Text"];
const easings = ["easeOutBounce","easeOutExpo","easeOutExpo"];
const App = () => {
  return(
    <div>
    
    <LetterAnimation type={AnimationType.WAVE} text = {text} duration={5}/>
    
    <LetterAnimation text = {text} duration={2} type={AnimationType.GROWTEXT}/>
    <WordAnimation type={AnimationType.GROWTEXT} textList = {textList} duration={3}/>
    </div>
    );
}

export default App
