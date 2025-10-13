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
	let newState = { ...state };
	switch (action.type) {
		case 'CHANGE_PLAYER_TURN':
			newState.currentPlayerStore === 'X'
				? (newState.currentPlayerStore = 'O')
				: (newState.currentPlayerStore = 'X');
			return newState;
		case 'END_GAME':
			newState.isGameEndedStore = true;
			return newState;
		case 'SET_DRAW':
			newState.isGameEndedStore = true;
			newState.isDrawStore = true;
			return newState;
		case 'SET_MARK':
			if (action.payload?.fieldStore)
				newState.fieldStore = [...action.payload.fieldStore];
			return newState;
		case 'RESTART_GAME':
			newState = {
				currentPlayerStore: 'X',
				isGameEndedStore: false,
				isDrawStore: false,
				fieldStore: ['', '', '', '', '', '', '', '', ''],
			};
			return newState;
		default:
			return state;
	}
}

// @ts-ignore
export let store = createStore(appReducer);
