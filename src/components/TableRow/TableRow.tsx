
import { FC } from 'react'
import { IShape } from '../../types/Shape'
import { getShapeValue } from '../../utils/getShapeValue'
import { getDensityValue } from '../../utils/getDensityValue'
interface TableRowProps {
    shape: IShape,
    showDetails:(name:string)=>void
}
const TableRow:FC<TableRowProps > = ({shape, showDetails} ) => {
    
  return (
    <tr onClick={()=>showDetails(shape.name)}>
        <td>{shape.name}</td>
        <td>{getShapeValue(shape)}</td>
        <td>{getDensityValue(shape)}</td>
    </tr>
  )
}

export default TableRow