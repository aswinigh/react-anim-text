
export interface animationData {
    values: object[],
    times: number[],
    easings: string[]

};
export const animationMap: animationData = {
    'growText': {
        values: [{scale:0.2, opacityVal: 0},{scale:1, opacityVal: 1},{scale:2, opacityVal: 0}],
        times: [0,0.5,1],
        easings: ["easeOutBounce","easeOutExpo","easeOutExpo"], 
      },
    'flow':  {
            values: [{scale: 4, opacityVal: 0},{scale:1, opacityVal:1}],
            times: [0,1],  
            easings: ["easeOutExpo"]
          }
    
};