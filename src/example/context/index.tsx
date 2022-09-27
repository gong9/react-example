import { createContext } from "react";

export interface ContextExampleType {
  color: string;
}

const context = createContext<null | ContextExampleType>(null);

export default context;
