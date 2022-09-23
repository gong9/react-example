import { useRef, useEffect } from 'react';
import FuncCompRefExam from "./function-comp-ref-example";
import ClaCompRefExam from "./class-comp-ref-example";

const FuncCompRef = () => {
    const ref = useRef(null)
    useEffect(()=>{
        console.log(ref);
        
    },[])
    return ( 
        <FuncCompRefExam ref={ref}/>
     );
}
 
export default FuncCompRef;