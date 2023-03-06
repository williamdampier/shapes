import { FC, useEffect, useState } from "react"
import { ShapeDetails } from "../../types/Shape"
import { getShapeValue } from "../../utils/getShapeValue";
import { getDensityValue } from "../../utils/getDensityValue";
import { getFloatingValue } from "../../utils/getFloatingValue";

interface ShapesDescriptionProps  {
    shape: ShapeDetails;
    liquidDensity:number;
}

/** Okay, yes we can implement an empty box with Name, Mass, Dimensions etc listed empty 
 * and then fill in values as we choose the shape 
 * however I decided not to show the box unless we actually click on shape table row
 * */

const ShapesDescription:FC<ShapesDescriptionProps> = ({shape, liquidDensity}) => {
    const [floats, setFloats] = useState<boolean>(false);
    

useEffect(()=>{
    if (shape) setFloats(getFloatingValue(shape, liquidDensity));
}, [shape])

if (!shape) return null;


  return (
    <div className="description">
        <ul>
            <li>
                <strong>Name:</strong>
                <span>{shape.name}</span>
            </li>
            <li>
                <strong>Dimensions:</strong>
                <span>{`H: ${shape.height} / W: ${shape.width} / L:${shape.length}`}</span>
            </li>
            <li>
                <strong>Mass:</strong>
                <span>{shape.mass}</span>
            </li>
            <li>
                <strong>Shape:</strong>
                <span>{getShapeValue(shape)}</span>
            </li>
            <li>
                <strong>Density:</strong>
                <span>{`${getDensityValue(shape)}, floats? ${ floats ? 'yes' : 'no'}`}</span>
            </li>
        </ul>
    </div>
  )
     
}

export default ShapesDescription