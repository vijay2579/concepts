import React from "react";
import { Provider } from "react-redux";
import Index from "./Hooks/UseContextDemo/Index";
import { store } from "./store";

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <div className="pure-component-vs-normal-component-vs-memo-component">
            {/* <PureComponentParent /> */}
            {/* <Ref /> */}
            {/* <UseEffectDemo /> */}
            {/* <UseMemoDemo /> */}
            {/* <UseCallbackDemo /> */}
            {/* <Index /> */}
            {/* <Dashboard /> */}
            <Index />
            {/* <Likes />
          <Comments /> */}
            {/* <Home /> */}
            {/* <RouterDemo /> */}
            {/* <AddTodo />
            <TodosList /> */}
          </div>
        </div>
      </Provider>
    );
  }
}

export default App;
