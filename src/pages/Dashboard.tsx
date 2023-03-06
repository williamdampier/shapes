import {FC, useState} from 'react'
import { fetchData } from '../utils/fetchData';
import ShapesTable from '../components/ShapesTable/ShapesTable';
import { ShapeDetails } from '../types/Shape';
import ShapesDescription from '../components/ShapesDescription/ShapesDescription';

// raw and unhandled API fetch - should've use custom React hook or Redux (preferred choice)
const APIData =  await fetchData();

const Dashboard:FC = () => {
  const [chosenShape, setChosenShape] = useState<ShapeDetails>(null);

  const showDetails= (shapeName:string):void => {
    if (APIData) {
       const foundShape = APIData.objects.filter(shape => shape.name === shapeName);
       setChosenShape(foundShape[0]);
    }
   
    
  } 
  return (
 <>  {
        APIData ? 
           <div className="wrapper">
          <ShapesTable shapes={APIData.objects} showDetails={showDetails} />
          <ShapesDescription shape={chosenShape} liquidDensity={APIData.liquidDensity}/></div>
          : 'Sorry the error has occured ' 
        
      }
 </>
    
    
  )
}

export default Dashboard