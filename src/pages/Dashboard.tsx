import {FC, useState} from 'react'
import { fetchData } from '../utils/fetchData';
import ShapesTable from '../components/ShapesTable/ShapesTable';
import { ShapeDetails } from '../types/Shape';
import ShapesDescription from '../components/ShapesDescription/ShapesDescription';

// raw and unhandled API fetch - should've use custom React hook or Redux (preferred choice) or fetch inside useEfeect as an option
const APIData =  await fetchData();

const Dashboard:FC = () => {
  const [chosenShape, setChosenShape] = useState<ShapeDetails>(null);

  /** showDetails method causes prop drilling down to table row - 
  * bad design as we store fetched data on a high level -> needs to be moved into a custom hook or better -> State manager (redux)
  * */

  const showDetails = (shapeName:string):void => {
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