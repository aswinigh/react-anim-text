import React, { Component } from 'react'
import './styles.module.css'
import {easing,stagger,keyframes} from 'popmotion'

const initialPhase = {scale:0.2, opacityVal:1}

class GrowText extends Component
{

   constructor(props){
     super(props);

     this.ref = React.createRef();
     const countofwords = this.props.textList.length;
     this.state = {
      animations: [...Array(countofwords).keys()].map(() => (initialPhase)),
      delay : 500,
      count: countofwords
     };
   }

   growAnimation = () =>{
     const Keyframes = Array(this.state.count).fill(
       keyframes({
         values: [initialPhase, {scale: 1, opacityVal: 1},{scale:1, opacityVal:1},
        {scale: 2, opacityVal: 0}, {scale:1, opacityVal: 0}],
        times: [0,0.1,0.3,0.5,1],  
        duration: this.props.duration,
          loop: Infinity,
          // delay: this.props.duration,
          easings: [easing.linear, easing.linear, easing.backOut, easing.backInOut]
          // yoyo: Infinity
       })
     );

     stagger(Keyframes, this.props.duration/this.state.count).start(
       animations => {
         this.setState({animations})
       }
     )
   } 
   componentDidMount()
   {
     this.growAnimation();
     
   }

   render(){
     return (
      <h1 style = {{position: "relative", fontWeight: "900"}}>
      {
      this.state.animations.map(({opacityVal, scale}, index) => {
        // console.log(scale);
        return( 
          
        <div style = {{...styles,transform: "scale("+scale+")", opacity: opacityVal}}>{this.props.textList[index]}</div>
        )
      })
      }
     
     
      </h1>
     );
   }
}

const styles = {
  position: "absolute",
  textAlign: "center",
  margin: "auto",
  left: "0",
  top: "0.3em",
  right: "0"
}

export default GrowText;