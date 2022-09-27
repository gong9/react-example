import { createContext } from "react";

export interface ContextExampleType {
  name: string;
}

const context = createContext<null | ContextExampleType>(null);

export default context;
