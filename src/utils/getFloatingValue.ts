import { IShape } from "../types/Shape"
import { getDensityValue } from "./getDensityValue";

export const getFloatingValue = (shape:IShape, liquidDensity:number) => {
    return getDensityValue(shape) < liquidDensity;
}