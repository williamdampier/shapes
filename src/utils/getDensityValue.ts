import { IShape } from "../types/Shape"

export const getDensityValue = (shape:IShape):number =>{
    //destructure args just for convenience
    const {mass, width, length, height} = shape;
    return (mass / (width * length * height));
}