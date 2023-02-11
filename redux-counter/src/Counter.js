import React from "react";
import { connect } from "react-redux";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";

class Counter extends React.Component {
  state = { count: 0 };

  increment = () => {
    this.props.dispatch({ type: "INCREMENT" });
  };

  decrement = () => {
    this.props.dispatch({ type: "DECREMENT" });
  };

  render() {
    return (
      <div>
        <h2>Counter</h2>
        <div className="counter">
          <span className="zero">{this.props.count}</span>
          <button onClick={this.decrement}>-</button> &nbsp;
          <button onClick={this.increment}>+</button> &nbsp;
          <button onClick={this.props.count}>reset</button>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    count: state.count,
  };
}

export default connect(mapStateToProps)(Counter);
