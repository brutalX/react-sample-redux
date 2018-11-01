import React, { Component } from "react";
import Navi from "./common/components/Navi";
import Header from './common/components/Header'
import Overlay from './common/components/Overlay'

class App extends Component {
  render() {
    return (
      <>
        <Header />
        <Navi>
          <ul>
            <li>Home</li>
            <li>AboutUs</li>
            <li>News</li>
            <li>Magazine</li>
          </ul>
        </Navi>
        <Overlay />
      </>
    );
  }
}

export default App;
