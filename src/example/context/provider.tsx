import {useState } from "react";
import MiddleCompExam from "./middle-comp-exam";
import context  from './index'
import {ContextExampleType} from './index'



const ContextExample = () => {
  const [exampleData, updataExampleData] = useState<ContextExampleType>({
    color: "#red",
  });
  return <context.Provider value={exampleData}>
    <MiddleCompExam/>
  </context.Provider>;
};

export default ContextExample;
