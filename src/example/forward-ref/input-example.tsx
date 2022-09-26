import React,{forwardRef} from "react";
interface InputExampleProps {}

class InputExample extends React.Component<InputExampleProps> {
  state = { node: null };
  render() {
    return (
      <div>
        <input type="text" />
      </div>
    );
  }
}

export default InputExample;
