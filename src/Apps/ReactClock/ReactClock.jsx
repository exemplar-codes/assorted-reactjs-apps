import React from "react";

class ReactClock extends React.Component {
  constructor(props) {
    // declare state
    super(props);
    this.state = { date: new Date(), count: 0, msg: "Declared" };
  }

  UNSAFE_componentWillMount() {
    this.state.msg = "Start";
  }
  componentDidMount() {
    this.state.msg = "Starting...";
  }
  componentWillUnmount() {
    this.state.msg = "Started";
  }
  componentWillUpdate() {}
  componentDidUpdate() {}

  render() {
    return (
      <h1
        onClick={() => {
          this.render();
        }}
      >
        <button>{this.state.msg}</button>
      </h1>
    );
  }
}

export default ReactClock;
