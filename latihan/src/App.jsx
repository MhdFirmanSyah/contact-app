import React, { Component, useState } from "react";

// export default class App extends Component {
//   constructor(props) {
//     super(props);
//     console.log("Component Created");

//     this.state = {
//       count: 0,
//     };

//     this.handleClick = this.handleClick.bind(this);
//   }
//   handleClick() {
//     this.setState((prevState) => ({
//       count: prevState.count + 1,
//     }));
//   }

//   render() {
//     return (
//       <h1 onClick={this.handleClick} draggable={false}>
//         Welcome {this.props.name} your click me in {this.state.count} times
//       </h1>
//     );
//   }
// }

export default function App({ name }) {
  const [state, setState] = useState(0);

  const handleClick = () => {
    setState(state + 1);
  };

  return (
    <h1 onClick={handleClick} draggable={false}>
      Welcome {name} your click me in {state} times
    </h1>
  );
}
