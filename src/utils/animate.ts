import tween from './tween.ts'

const transformations = ['translateX', 'translateY', 'translateZ', 'rotate', 'rotateX', 'rotateY', 'rotateZ', 'scale', 'scaleX', 'scaleY', 'scaleZ', 'skew', 'skewX', 'skewY', 'perspective', 'matrix', 'matrix3d'];
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
    let transformString = "";
    keyList.forEach(key => {
        let unit;

        if(key.includes("translate"))
        {
            unit = "px";
        }
        else if(key.includes("rotate")||key.includes("skew"))
        {
            unit = "deg";
        }
        else{
            unit = "";
        }
        
        if(transformations.includes(key))
        {   
            transformString = transformString.concat(key ,"("+ tween(t-keyframes.times[valueIndex],keyframes.values[valueIndex][key],
                keyframes.values[valueIndex+1][key], keyframes.duration*(deltaTime), keyframes.easings[valueIndex])+unit+") ");
            // console.log(transformString);
        }
        else{
        a = {...a, [key]: tween(t-keyframes.times[valueIndex],keyframes.values[valueIndex][key],
             keyframes.values[valueIndex+1][key], keyframes.duration*(deltaTime), keyframes.easings[valueIndex])}
        }
    });

    a = {...a, 'transform': transformString};
    
    return a;
}

export default animate;