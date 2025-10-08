import { createStore } from 'redux';

function appReducer(state = {}, action) {
	switch (action.type) {
		case "":
			return;
		default:
			return state;
	}
}

export let store = createStore(appReducer);
