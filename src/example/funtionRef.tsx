import { useEffect, useState, createRef } from "react";

const FunctionRef = () => {
  const [divRefs, updataDivRefs] = useState<null | { current: any }>(null);

  useEffect(() => {
    updataDivRefs(createRef());
  }, []);
  
  return <div ref={divRefs}>funtion组件中使用createRef</div>;
};

export default FunctionRef;
