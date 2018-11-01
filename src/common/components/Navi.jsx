import React, { Component } from 'react';
import styled from 'styled-components';
import { navOpen, navClose } from '../ducks/actions/';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Spring } from 'react-spring';

const MyNav = styled.button`
	background-color: green;
	color: #000000;
	width: 50px;
	height: 50px;
	padding: 10px;
	top: 0px;
	left: 0px;
	position: absolute;
	z-index: 1;
`;

const MenuNav = styled.div`
	width: 300px;
	height: 100%;
	position: fixed;
	bottom: 0;
	top: 0;
	left: 0;
	background-color: #cecece;
	z-index: 1000;
`;
const Close = styled.div`
	background: transparent;
	color: #000000;
	right: 5px;
	top: 5px;
	position: absolute;
	cursor: pointer;
	font-weight: 700;
`;

class Navi extends Component {
	render() {
		console.log(this.props.open);
		return (
			<Spring
				from={{ transform: 'translate3d(-300px,0,0)' }}
				to={{
					transform: this.props.open ? 'translate3d(0px,0,0)' : 'translate3d(-300px,0,0)'
				}}
			>
				{(props) => (
					<React.Fragment>
						<MenuNav style={props}>
							<Close onClick={this.props.navClose}>X</Close>
							{this.props.children}
						</MenuNav>
						<MyNav onClick={this.props.navOpen} />
					</React.Fragment>
				)}
			</Spring>
		);
	}
}
function mapStateToProps(state) {
	return {
		open: state.navclick.open
	};
}

const mapDispatchToProps = {
	navOpen,
	navClose
};

export default connect(mapStateToProps, mapDispatchToProps)(Navi);
