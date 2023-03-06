
import { FC } from 'react'
import { IShape } from '../../types/Shape'
interface TableRowProps {
    shape: IShape
}
const TableRow:FC<TableRowProps > = ({shape} ) => {
  return (
    <div>TableRow</div>
  )
}

export default TableRow