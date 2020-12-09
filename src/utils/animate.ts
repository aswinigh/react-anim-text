import tween from './tween.ts'

const animate = (t,keyframes) => {
    let valueIndex = -1;
    
    keyframes.times.forEach(time => {
        if(time<t/keyframes.duration && time<1)
            valueIndex +=1;
    });
    let a  = {};
    let deltaTime = keyframes.times[valueIndex+1] - keyframes.times[valueIndex];
    // console.log("Animating:" + valueIndex);
    let keyList = Object.keys(keyframes.values[valueIndex]);
    keyList.forEach(key => {
        a = {...a, [key]: tween(t-keyframes.times[valueIndex],keyframes.values[valueIndex][key],
             keyframes.values[valueIndex+1][key], keyframes.duration*(deltaTime), keyframes.easings[valueIndex])}
    });
    
    return a;
}

export default animate;