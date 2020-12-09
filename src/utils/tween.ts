import {easing} from './easing.ts'

const tween = (t: number,min:number,max:number, duration: number, easingName: string = 'linear'): number =>{
    const fn: (time: number)=> number = easing[easingName];
    // console.log("min"+t);
    return min + (max-min)*fn(t/duration);
}

export default tween;