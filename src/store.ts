import { createStore } from 'redux';

const initValue = {
	currentPlayerStore: 'X',
	isGameEndedStore: false,
	isDrawStore: false,
	fieldStore: ['', '', '', '', '', '', '', '', ''],
};

function appReducer(
	state = initValue,
	action: {
		type: string;
		payload?: {
			currentPlayerStore?: 'X' | 'O';
			fieldStore?: string[];
			isGameEndedStore?: boolean;
			isDrawStore?: boolean;
		};
	},
) {
	switch (action.type) {
		case 'CHANGE_PLAYER_TURN':
			state.currentPlayerStore === 'X'
				? (state.currentPlayerStore = 'O')
				: (state.currentPlayerStore = 'X');
			return state;
		case 'END_GAME':
			return (state.isGameEndedStore = true);
		case 'SET_DRAW':
			state.isGameEndedStore = true;
			state.isDrawStore = true;
			return state;
		case 'SET_MARK':
			if (action.payload?.fieldStore) state.fieldStore = [...action.payload.fieldStore];
			return state;
		case 'RESTART_GAME':
			state.isGameEndedStore = false;
			state.isDrawStore = false;
			state.fieldStore = ['', '', '', '', '', '', '', '', ''];
			state.currentPlayerStore = 'X';
			return state;
		default:
			return state;
	}
}

// @ts-ignore
export let store = createStore(appReducer);
