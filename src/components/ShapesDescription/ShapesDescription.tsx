import { FC } from "react"
import { IShape } from "../../types/Shape"

interface ShapesDescriptionProps  {
    shape: IShape;
}

const ShapesDescription:FC<ShapesDescriptionProps> = ({shape}) => {
  return (
    <div>ShapesDescription</div>
  )
}

export default ShapesDescription