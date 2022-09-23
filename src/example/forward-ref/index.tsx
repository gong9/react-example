import React, { ReactElement } from "react";

interface ForwardRefExProps {}

interface ForwardRefExState {
  node: HTMLElement | ReactElement | null;
}

class ForwardRefEx extends React.Component<
  ForwardRefExProps,
  ForwardRefExState
> {
  state = { node: null };
  render() {
    return <div></div>;
  }
}

export default ForwardRefEx;
