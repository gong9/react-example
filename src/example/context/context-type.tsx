import React from "react";
import MyContext from "./index";

interface ContextTypeExamProps {}

interface ContextTypeExamState {}

class ContextTypeExam extends React.Component<
  ContextTypeExamProps,
  ContextTypeExamState
> {
  static contextType = MyContext;
  render() {
    console.log(this.context);
    return <div>contextType方式订阅context</div>;
  }
}

export default ContextTypeExam;
