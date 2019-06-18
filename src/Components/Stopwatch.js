import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import Timer from "./Timer";
import { StartTime, StopTime } from "../Actions/StopwatchAction";

class Stopwatch extends Component {
  render() {
    return (
      <div>
        <Timer
          StartTime={this.props.StartTime}
          StopTime={this.props.StopTime}
          time={this.props.time}
        />
        <Timer
          time={this.props.time}
          StartTime={this.props.StartTime}
          StopTime={this.props.StopTime}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    time: state.time
  };
};

const mapDispatchToProps = dispatch =>
  bindActionCreators({ StartTime, StopTime }, dispatch);

const hoc = connect(
  mapStateToProps,
  mapDispatchToProps
);

const newComponent = hoc(Stopwatch);

export default newComponent;
