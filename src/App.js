import React, { Component } from "react";
import UserList from "./common/components/UserList";
import UserDetail from "./common/components/UserDetail";
import Navi from "./common/components/Navi";

class App extends Component {
  render() {
    return (
      <>
        <UserList />
        <UserDetail />
        <Navi />
      </>
    );
  }
}

export default App;
