import { FC } from "react";
import { IShape } from "../../types/Shape"
import TableRow from "../TableRow/TableRow";

interface ShapesTableProps {
    shapes: IShape[];
    showDetails:(name:string)=>void;
}

const ShapesTable:FC<ShapesTableProps> = ({shapes, showDetails}: ShapesTableProps) =>
{
  return (
    <div className="table-wrapper">
        <table className="container">
        <thead>
            <tr>
                <th>Name</th>
                <th>Shape</th>
                <th>Density</th>
            </tr> 
            </thead>
 
        <tbody>
        {
        // render objects table if we have data
        shapes && 
        shapes.map(shape => <TableRow key={shape.name} shape={shape} showDetails={()=>showDetails(shape.name)}/>) 
        }
        </tbody>

        </table>
    </div>
   
  )
}

export default ShapesTable