import { createContext, ReactElement, useState } from "react";

interface ContextExampleType {
  color: string;
}

const context = createContext<null | ContextExampleType>(null);
const { Provider, Consumer } = context;

const ContextExample = ({ children }: { children: ReactElement }) => {
  const [exampleData, updataExampleData] = useState<ContextExampleType>({
    color: "#red",
  });
  return <Provider value={exampleData}>{children}</Provider>;
};

export default ContextExample;
