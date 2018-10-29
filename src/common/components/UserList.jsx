import React, { Component } from "react";
import { connect } from "react-redux";
import { selectUser } from "../ducks/actions/";
import { bindActionCreators } from "redux";
class UserList extends Component {
  createListItems() {
    return this.props.users.map(user => (
      <li onClick={() => this.props.select(user)} key={user.id}>
        {user.first} x {user.last}
      </li>
    ));
  }
  render() {
    return <ul>{this.createListItems()}</ul>;
  }
}

function mapStateToProps(state) {
  return {
    users: state.userred
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ select: selectUser }, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserList);
