import { createStore } from 'redux';

const initValue = {
	currentPlayer: 'X',
	isGameEnded: false,
	isDraw: false,
	field: ['', '', '', '', '', '', '', '', ''],
}

function appReducer(state = initValue, action) {
	switch (action.type) {
		case "SET_NEXT_TURN":
			return state.currentPlayer === 'X' ? state.currentPlayer = 'O' : state.currentPlayer = 'X';
		default:
			return state;
	}
}

export let store = createStore(appReducer);
