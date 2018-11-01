import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { navClose } from '../ducks/actions/';
import { Spring } from 'react-spring';

const BGOverlay = styled.div`
	background-color: rgba(0, 0, 0, 0.9);
	width: 100%;
	height: 100vh;
	top: 0;
	bottom: 0;
	z-index: 900;
`;

class Overlay extends Component {
	render() {
		return (
			<Spring
				from={{ opacity: 0 }}
				to={{ opacity: this.props.open ? 1 : 0 }}
				config={{ tension: 0, friction: 2, precision: 0.1 }}
			>
				{(props) => <BGOverlay style={props} onClick={this.props.navClose} />}
			</Spring>
		);
	}
}
export default connect((state) => ({ open: state.navclick.open }), { navClose })(Overlay);
