import React, { Component } from "react";
import styled from "styled-components";
import { clickBtn } from "../ducks/actions/";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
const MyNav = styled.button`
  background-color: green;
  color: #000000;
  width: 50px;
  height: 50px;
  padding: 10px;
`;

class Navi extends Component {
  render() {
    console.log(this.props.open);

    return <MyNav onClick={() => this.props.click()} />;
  }
}
function mapStateToProps(state) {
  return {
    open: state.navclick
  };
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators({ click: clickBtn }, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Navi);
