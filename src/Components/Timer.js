import React, { Component } from "react";

class Timer extends Component {
  constructor(props) {
    super(props);
    this.state({ mode: "STAT" });
  }
  changeTime = () => {
    if (this.state.mode === "START") {
      this.x = setInterval(() => {
        this.props.StartTime();
      }, 1000);
      this.setState = { mode: "STOP" };
    } else if (this.state.mode === "STOP") {
      clearInterval(this.x);
      this.setState = { mode: "START" };
    }
  };
  render() {
    return (
      <div>
        <p>{this.props.time}</p>
        <button onClick={this.ChangeTime}>{this.state.mode}</button>
      </div>
    );
  }
}

export default Timer;
