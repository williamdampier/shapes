import { IShape } from "../types/Shape"
import { getDensityValue } from "./getDensityValue";

// function to check density of the object and return floatable value

export const getFloatingValue = (shape:IShape, liquidDensity:number) => {
    return getDensityValue(shape) < liquidDensity;
}