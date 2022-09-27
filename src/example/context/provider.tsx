import { useState } from "react";
import MiddleCompExam from "./middle-comp-exam";
import context from "./index";
import userContext from "./user-context";
import { ContextExampleType } from "./index";

const ContextExample = () => {
  const [exampleData, updataExampleData] = useState<ContextExampleType>({
    color: "#red",
  });
  return (
    <context.Provider value={exampleData}>
      <context.Provider value={{
        color:'#yellow'
      }}>
        <userContext.Provider
          value={{
            name: "xg",
          }}
        >
          <MiddleCompExam />
        </userContext.Provider>
      </context.Provider>
    </context.Provider>
  );
};

export default ContextExample;
