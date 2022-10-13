import React from "react";

interface BatchHandleProps {}

interface BatchHandleState {
  count: number;
}

class BatchHandle extends React.Component<BatchHandleProps, BatchHandleState> {
  state = { count: 0 };
  componentDidMount() {
    this.setState({
      count: this.state.count + 1,
    });
    console.log(this.state.count); //0
    setTimeout(() => {
      this.setState({
        count: this.state.count + 1,
      });
    });
    console.log(this.state.count); // 0
  }
  render() {
    return <div>{this.state.count}</div>;
  }
}

export default BatchHandle;
