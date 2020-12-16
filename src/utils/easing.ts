export type EasingType = (time: number) => number;
export interface EasingMap{
    quadratic: EasingType;
    linear: EasingType;

    easeInSine : EasingType;
    easeOutSine : EasingType;
    easeInOutSine : EasingType;

    easeInQuad : EasingType;
    easeOutQuad : EasingType;
    easeInOutQuad : EasingType;

    easeInCubic : EasingType;
    easeOutCubic : EasingType;
    easeInOutCubic : EasingType;

    easeInQuart : EasingType;
    easeOutQuart : EasingType;
    easeInOutQuart : EasingType;

    easeInQuint : EasingType;
    easeOutQuint : EasingType;
    easeInOutQuint : EasingType;

    easeInExpo : EasingType;
    easeOutExpo : EasingType;
    easeInOutExpo : EasingType;

    easeInCirc : EasingType;
    easeOutCirc : EasingType;
    easeInOutCirc : EasingType;

    easeInBack : EasingType;
    easeOutBack : EasingType;
    easeInOutBack : EasingType;

    easeInElastic : EasingType;
    easeOutElastic : EasingType;
    easeInOutElastic : EasingType;

    easeInBounce : EasingType;
    easeOutBounce: EasingType;
    easeInOutBounce : EasingType;
}
export const easing: EasingMap = {
quadratic: (t) => t * (-(t * t) * t + 4 * t * t - 6 * t + 4),
linear: (t) => t,

easeInSine : (t) => 1 - Math.cos((t * Math.PI) / 2),
easeOutSine : (t) => Math.sin((t * Math.PI) / 2),
easeInOutSine : (t) => -(Math.cos(Math.PI * t) - 1) / 2,

easeInQuad : (t) => t*t,
easeOutQuad : (t) => 1 - (1 - t) * (1 - t),
easeInOutQuad : (t) => t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2,

easeInCubic : (t) => t*t*t,
easeOutCubic : (t) => 1 - Math.pow(1 - t, 3),
easeInOutCubic : (t) => t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2,

easeInQuart : (t) => t*t*t*t,
easeOutQuart : (t) => 1 - Math.pow(1 - t, 4),
easeInOutQuart : (t) => t < 0.5 ? 8 * t * t * t * t : 1 - Math.pow(-2 * t + 2, 4) / 2,

easeInQuint : (t) => t * t * t * t * t,
easeOutQuint : (t) => 1 - Math.pow(1 - t, 5),
easeInOutQuint : (t) => t < 0.5 ? 16 * t * t * t * t * t : 1 - Math.pow(-2 * t + 2, 5) / 2,

easeInExpo : (t) => t === 0 ? 0 : Math.pow(2, 10 * t - 10),
easeOutExpo : (t) =>  t === 1 ? 1 : 1 - Math.pow(2, -10 * t),
easeInOutExpo : (t) =>  t === 0
    ? 0
    : t === 1
    ? 1
    : t < 0.5 ? Math.pow(2, 20 * t - 10) / 2
    : (2 - Math.pow(2, -20 * t + 10)) / 2,

easeInCirc : (t) => 1 - Math.sqrt(1 - Math.pow(t, 2)),
easeOutCirc : (t) => Math.sqrt(1 - Math.pow(t - 1, 2)),
easeInOutCirc : (t) =>  t < 0.5
    ? (1 - Math.sqrt(1 - Math.pow(2 * t, 2))) / 2
    : (Math.sqrt(1 - Math.pow(-2 * t + 2, 2)) + 1) / 2,

easeInBack : (t) => {
    const c1 = 1.70158;
    const c3 = c1 + 1;

    return c3 * t * t * t - c1 * t * t
},
easeOutBack : (t) => {
    const c1 = 1.70158;
    const c3 = c1 + 1;

    return 1 + c3 * Math.pow(t - 1, 3) + c1 * Math.pow(t - 1, 2)
},
easeInOutBack : (t) => {
    const c1 = 1.70158;
    const c2 = c1 * 1.525;

    return t < 0.5
        ? (Math.pow(2 * t, 2) * ((c2 + 1) * 2 * t - c2)) / 2
        : (Math.pow(2 * t - 2, 2) * ((c2 + 1) * (t * 2 - 2) + c2) + 2) / 2
},

easeInElastic : (t) => {
    const c4 = (2 * Math.PI) / 3;

    return t === 0
        ? 0
        : t === 1
        ? 1
        : -Math.pow(2, 10 * t - 10) * Math.sin((t * 10 - 10.75) * c4)
},
easeOutElastic : (t) => {
    const c4 = (2 * Math.PI) / 3;

    return t === 0
        ? 0
        : t === 1
        ? 1
        : Math.pow(2, -10 * t) * Math.sin((t * 10 - 0.75) * c4) + 1
},
easeInOutElastic : (t) => {
    const c5 = (2 * Math.PI) / 4.5;

    return t === 0
        ? 0
        : t === 1
        ? 1
        : t < 0.5
        ? -(Math.pow(2, 20 * t - 10) * Math.sin((20 * t - 11.125) * c5)) / 2
        : (Math.pow(2, -20 * t + 10) * Math.sin((20 * t - 11.125) * c5)) / 2 + 1
},

easeInBounce : (t) => {
    return 1 - easing.easeOutBounce(1 - t);
},
easeOutBounce: (t) => {
    const n1 = 7.5625;
    const d1 = 2.75;
    
    if (t < 1 / d1) {
        return n1 * t * t;
    } else if (t < 2 / d1) {
        return n1 * (t -= 1.5 / d1) * t + 0.75;
    } else if (t < 2.5 / d1) {
        return n1 * (t -= 2.25 / d1) * t + 0.9375;
    } else {
        return n1 * (t -= 2.625 / d1) * t + 0.984375;
    }
},
easeInOutBounce : (t) => t < 0.5
    ? (1 - easing.easeOutBounce(1 - 2 * t)) / 2
    : (1 + easing.easeOutBounce(2 * t - 1)) / 2,

}

