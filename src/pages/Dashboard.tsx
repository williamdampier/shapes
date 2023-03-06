import {FC} from 'react'
import { fetchData } from '../utils/fetchData';
import ShapesTable from '../components/ShapesTable/ShapesTable';
const APIData =  await fetchData();

const Dashboard:FC = () => {
  
  return (
    <div className="wrapper">
      {
        APIData ? 
          <ShapesTable shapes={APIData.objects}/>
          
          : 'Sorry the error has occured ' 
        
      }
    </div>
  )
}

export default Dashboard