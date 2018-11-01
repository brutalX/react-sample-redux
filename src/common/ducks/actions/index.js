export const TOGGLE_BUTTON = 'TOGGLE_BUTTON';

export const selectUser = (user) => {
	return {
		type: 'USER_SELECTED',
		payload: user
	};
};

// export const clickBtn = () => {
// 	return {
// 		type: 'TOGGLE_BUTTON',
// 		payload: {
// 			open: false
// 		}
// 	};
// };

export const navOpen = () => {
	return {
		type: 'NAV_OPEN',
		payload: {
			open: true
		}
	};
};

export const navClose = () => {
	return {
		type: 'NAV_CLOSE',
		payload: {
			open: false
		}
	};
};
