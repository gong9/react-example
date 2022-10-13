import React from 'react';
import ReactDOM from 'react-dom/client';

import FunctionRef from './example/funtionRef';
import FuncCompRef from './example/forward-ref/function-comp-ref';

//! example context
import ProviderExam from './example/context/provider'

import BatchHandle from './example/class-components';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(<BatchHandle/>);

