import { IShape } from "../types/Shape"
import { getDensityValue } from "./getDensityValue";

export const getFloating = (shape:IShape, liquidDensity:number) => {
    return getDensityValue(shape) < liquidDensity;
}