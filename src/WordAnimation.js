import React, {useEffect, useRef, useState } from 'react'
import './styles.module.css'
import animate from './utils/animate.ts'
import {AnimationType} from './utils/animations.ts'
const initialPhase = {scale:0.2, opacity:0}


function WordAnimation(props) {

  let count = 0;
  let done = false;
  const [animationState, setAnimationState] = useState(initialPhase);
  const requestRef = useRef();
  const previousTimeRef = useRef();
  const keyframes = {
    ...props.type,
    duration: props.duration,
    startOffset: 1
  }

  const frameUpdate = time => {
    if (previousTimeRef.current != undefined) {
      const deltaTime = time - previousTimeRef.current;
      
      // Pass on a function to the setter of the state
      // to make sure we always have the latest state
      count = (count + deltaTime * 0.001);
      if(count>keyframes.startOffset)
        setAnimationState(
          animate(count-keyframes.startOffset, keyframes)
        );
    }
    previousTimeRef.current = time;
    
    if(count-keyframes.startOffset<props.duration)
      requestRef.current = requestAnimationFrame(frameUpdate);
  }

  useEffect(() => {
    requestRef.current = requestAnimationFrame(frameUpdate);
    return () => cancelAnimationFrame(requestRef.current);
  }, []);
     return (
      <h1 style = {{position: "relative", textAlign: "center",fontWeight: "900"}}>
        
        <div style = {{...styles,...animationState}}>{props.textList[0]}</div>

      </h1>
     );
   
}

const styles = {
  display:"inline-block",
  
   fontWeight: "900"
}

export default WordAnimation;