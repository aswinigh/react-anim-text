import React, { Component } from 'react'
import './styles.module.css'
import {easing,stagger,keyframes} from 'popmotion'

const initialPhase = {scale:4, opacityVal:0}

class LetterFlow extends Component
{

   constructor(props){
     super(props);

     this.ref = React.createRef();
     this.textList = this.props.text.split("");
     const countofwords = this.textList.length;
     this.state = {
      animations: [...Array(countofwords).keys()].map(() => (initialPhase)),
      delay : 500,
      count: countofwords
     };
   }

   growAnimation = () =>{
     const Keyframes = Array(this.state.count).fill(
       keyframes({
         values: [{scale: 4, opacityVal: 0},{scale:1, opacityVal:1}],
        times: [0,1],  
        duration: this.props.duration/this.state.count,
          // loop: Infinity,
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
   {  setTimeout(this.growAnimation(),1000);
    //  this.growAnimation();
     
   }

   render(){
     return (
      <h1 style = {{textAlign: "center", fontWeight: "900"}}>
      { 
      this.state.animations.map(({opacityVal, scale}, index) => {
        // console.log(scale);
        return( 
          
        <span style = {{display:"inline-block" ,transform: "scale("+scale+") translateZ(0px)" , opacity: opacityVal}}>{this.textList[index]}</span>
        
        )
      })
      }
     
     
      </h1>
     );
   }
}


export default LetterFlow;