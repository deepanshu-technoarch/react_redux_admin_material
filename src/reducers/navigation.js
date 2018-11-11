import {NAV_DRAWER_OPEN} from '../constants';
    
	const initialState = {
		open: true,
	}

	const navigation = (state = initialState, action) => {
		switch (action.type) {
			case NAV_DRAWER_OPEN:
			return {
				...state,
				open: !state.open
			};

			default:
			return state;
		}
	}

	export default navigation;
