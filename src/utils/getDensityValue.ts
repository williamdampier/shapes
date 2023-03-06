import { IShape } from "../types/Shape"

// function to calculate density of the object

export const getDensityValue = (shape:IShape):number =>{
    //destructure args just for convenience
    const {mass, width, length, height} = shape;
    
    return Number((mass / (width * length * height)).toFixed(2));
}