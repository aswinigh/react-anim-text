import tween from './tween.ts'

const animate = (t,keyframes) => {
    const valueIndex = 0;
    let a  = {};
    // console.log("Animating:" + t);
    let keyList = Object.keys(keyframes.values[valueIndex]);
    keyList.forEach(key => {
        a = {...a, [key]: tween(t,keyframes.values[valueIndex][key],
             keyframes.values[valueIndex+1][key], keyframes.duration, keyframes.easings[valueIndex])}
    });
    
    return a;
}

export default animate;