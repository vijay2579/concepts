import React from "react";
import MemoComponent from "./MemoComponent";
import NormalComponent from "./NormalComponent";
import PureComponentDemo from "./PureComponentDemo";

class PureComponentParent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Test",
    };
  }

  componentDidMount() {
    setInterval(() => {
      console.log("Parent Component's SetInterval called");
      this.setState({
        name: "Test",
      });
    }, 3000);
  }

  render() {
    return (
      <div className="App">
        <div className="pure-component-vs-normal-component-vs-memo-component">
          <NormalComponent />
          <PureComponentDemo />
          <MemoComponent name={this.state.name} />
          <button
            onClick={() => {
              this.setState({ name: "Test" });
            }}
          >
            Click
          </button>
        </div>
      </div>
    );
  }
}

export default PureComponentParent;
