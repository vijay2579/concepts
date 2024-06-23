import React, { PureComponent } from "react";

class PureComponentDemo extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      name: "Test",
    };
  }

  changeName = () => {
    this.setState({
      name: "Test",
    });
  };

  render() {
    console.log(`Pure Component Called - ` + this.state.name);
    return (
      <>
        <button onClick={this.changeName}> Pure component Click Here</button>
      </>
    );
  }
}
export default PureComponentDemo;
