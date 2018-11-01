import React, { Component } from 'react';
import styled from 'styled-components';

const TopHeader = styled.div`
	position: sticky;
	height: 7vh;
	background-color: #000000;
	width: 100%;
`;
class Header extends Component {
	render() {
		return <TopHeader />;
	}
}
export default Header;
