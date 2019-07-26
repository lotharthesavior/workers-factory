import React, { Component } from "react";
import Game from "./Game";
import Counter from "./Counter";
import { Provider } from "react-redux";

import store from "./store";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div
          style={{
            display: "flex",
            alignContent: "center",
            justifyContent: "center",
            flexDirection: "row",
            height: "100vh",
          }}
        >
          <Game />
        </div>
      </Provider>
    );
  }
}

export default App;
