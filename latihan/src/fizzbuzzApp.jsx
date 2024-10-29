import { Component, useState } from "react";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
    console.log(this.state.count);

    this.prevState = this.prevState.bind(this);
    this.resetState = this.resetState.bind(this);
  }

  prevState() {
    this.setState((preState) => ({
      count: preState.count + 1,
    }));
  }

  resetState() {
    this.setState(() => {
      return { count: 0 };
    });
  }

  Button({ oper, onClick }) {
    return <button onClick={onClick}>{oper}</button>;
  }

  Display({ state }) {
    let text = state;

    if (state % 5 === 0 && state % 7 === 0 && state > 0) text = "FizzBuzz";
    else if (state % 5 === 0 && state > 0) text = "Fizz";
    else if (state % 7 === 0 && state > 0) text = "Buzz";

    return <h1>{text}</h1>;
  }

  render() {
    return (
      <div className="container">
        <this.Button onClick={this.prevState} oper={"+ increase"} />
        <this.Display state={this.state.count} />
        <this.Button onClick={this.resetState} oper={"- reset"} />
      </div>
    );
  }
}
