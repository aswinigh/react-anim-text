import React, { Component } from 'react'
import './styles.module.css'
import anime from 'animejs'

class GrowText extends Component
{
   constructor(){
     super();

     this.ref = React.createRef();
     this.state = {
      opacityIn : [0,1],
      scaleIn : [0.2, 1],
      scaleOut : 3,
      durationIn : 800,
      durationOut : 600,
      delay : 500
     };
   }

   componentDidMount()
   {
     this.animeRef = anime.timeline({loop: true}).add({
      targets: this.ref.current,
      opacity: this.state.opacityIn,
      scale: this.state.scaleIn,
      duration: this.state.durationIn
     }).add({
      targets: this.ref.current,
      opacity: 0,
      scale: this.state.scaleOut,
      duration: this.state.durationOut,
      easing: "easeInExpo",
      delay: this.state.delay
    })
   }

   render(){
     return (
      <h1 className="TextItem" style={{textAlign: "center",fontSize:"4.5em", color:"darkgrey", fontWeight: "900"}} ref={this.ref}>{this.props.text}</h1>
     );
   }
}

export default GrowText;