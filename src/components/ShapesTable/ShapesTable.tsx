import { FC } from "react";
import { IShape } from "../../types/Shape"

interface ShapesTableProps {
    shapes: IShape[];
}

const ShapesTable:FC<ShapesTableProps> = ({shapes}: ShapesTableProps) =>
{
  return (
    <div>ShapesTable</div>
  )
}

export default ShapesTable