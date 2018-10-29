import React, { Component } from "react";
import { connect } from "react-redux";

class UserDetail extends Component {
  render() {
    if (!this.props.users) {
      return <h4>Select a user</h4>;
    }
    return (
      <div>
        <h2>
          {this.props.users.first} x {this.props.users.last}
        </h2>
        <p>Address: {this.props.users.address}</p>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    users: state.activeUser
  };
}

export default connect(mapStateToProps)(UserDetail);
