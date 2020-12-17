import React, { useState, useEffect, useRef } from 'react'
import './styles.module.css'
import animate from './utils/animate.ts';
import {animationMap} from './utils/animations.ts';

const initialPhase = {scale:4, opacityVal:0}

function LetterAnimation(props)
{
  const textList = props.text.split("");
  
  const countofwords = textList.length;
  // console.log(textList);
  // console.log(countofwords);
    const [animationState, setAnimationState] = useState(Array(countofwords).fill(initialPhase)); 
    const requestRef = useRef();
    const previousTimeRef = useRef(); 
    let count=0;
  let keyframes = new Array(countofwords);
  let animationStates = Array(countofwords).fill(initialPhase);
  for(let i=0;i<countofwords;i++){
    keyframes[i] = {
    ...animationMap[props.type],
    duration: props.duration/countofwords, 
    startOffset: 0.5+i*0.5
   };
  }
  // console.log(keyframes);
   const frameUpdate = time => {
    if (previousTimeRef.current != undefined) {
      const deltaTime = time - previousTimeRef.current;
      
      // Pass on a function to the setter of the state
      // to make sure we always have the latest state
      count = (count + deltaTime * 0.001);
      if(count>keyframes[0].startOffset)
      {
        for(let i=0;i<countofwords;i++)
        { 
          // console.log("I"+i);
          // console.log(keyframes[i]);
          if(count>keyframes[i].startOffset && count<keyframes[i].startOffset+keyframes[i].duration)
            animationStates[i] = animate(count-keyframes[i].startOffset, keyframes[i]);
        }
        console.log(animationStates[0].scale)
        setAnimationState(
          [...animationStates]
        );
      }
    }
    previousTimeRef.current = time;
    
    if(count-keyframes[countofwords-1].startOffset<props.duration)
      requestRef.current = requestAnimationFrame(frameUpdate);
  }

  useEffect(() => {
    requestRef.current = requestAnimationFrame(frameUpdate);
    return () => cancelAnimationFrame(requestRef.current);
  }, []);
  

   
     return (
      <h1 style = {{textAlign: "center", fontWeight: "900"}}>
      { 
      animationState.map(({opacityVal, scale}, index) => {
        // console.log(scale);
        return( 
          
        <span style = {{display:"inline-block" ,transform: "scale("+scale+") translateZ(0px)" , opacity: opacityVal}}>{textList[index]}</span>
        
        )
      })
      }
     
     
      </h1>
     );
   
}


export default LetterAnimation;