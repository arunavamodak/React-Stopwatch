import React, { Component } from "react";


class Stopwatch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: 0,
      toggle: "Start"
    };
  }
  Start = () => {
    this.setState(prevState => ({
      time: prevState.time + 1,
      toggle: "Stop"
    }));
  };
  Stop = x => {
    clearInterval(x);
    this.setState({ toggle: "Start" });
  };

  ChangeTime = () => {
    if (this.state.toggle === "Start") {
      this.x = setInterval(() => {
        this.Start();
      }, 1000);
    } else if (this.state.toggle === "Stop") {
      this.Stop(this.x);
    }
  };

  render() {
    return (
      <div>
        <button onClick={this.ChangeTime}>{this.state.toggle}</button>
        <p>{this.state.time}</p>
      </div>
    );
  }
}

export default Stopwatch;
