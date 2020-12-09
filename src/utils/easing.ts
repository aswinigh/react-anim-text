export type EasingType = (time: number) => number;
export interface EasingMap{
    quadratic: EasingType;
    linear: EasingType
}
export const easing: EasingMap = {
quadratic: (t) => t * (-(t * t) * t + 4 * t * t - 6 * t + 4),
linear: (t) => t
}