
export interface animationData {
    values: object[],
    times: number[],
    easings: string[]

};

export const AnimationType = {
    GROWTEXT : {
        values: [{scale:0.2, opacity: 0},{scale:1, opacity: 1},{scale:2, opacity: 0}],
        times: [0,0.5,1],
        easings: ["easeOutBounce","easeInExpo","easeOutExpo"], 
      },
    FLOW:  {
            values: [{scale: 4, opacity: 0},{scale:1, opacity:1}],
            times: [0,1],  
            easings: ["easeOutExpo"]
          },
    WAVE: {
        values: [{translateY:10, opacity: 0.4},{translateY:0, opacity:1}],
            times: [0,1],  
            easings: ["easeOutElastic"]
    }
    
};
