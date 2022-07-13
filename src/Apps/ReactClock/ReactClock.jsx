import React from "react";

class ReactClock extends React.Component {
  constructor(props) {
    // declare state
    super(props);
    this.state = { date: new Date(), count: 0, msg: "Declared" };
  }

  UNSAFE_componentWillMount() {
    this.setState({ msg: "Start" });
  }
  componentDidMount() {
    this.setState({ msg: "Starting..." });
  }
  componentWillUnmount() {
    this.setState({ msg: "Started" });
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
