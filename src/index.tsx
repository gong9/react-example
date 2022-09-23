import React from 'react';
import ReactDOM from 'react-dom/client';

import FunctionRef from './example/funtionRef';
import FuncCompRef from './example/forward-ref/function-comp-ref';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(<FuncCompRef/>);

