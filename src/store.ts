import { createStore } from 'redux';
import type { IStore } from './types/types.ts';

const initValue: IStore = {
	currentPlayerStore: 'X',
	isGameEndedStore: false,
	isDrawStore: false,
	fieldStore: ['', '', '', '', '', '', '', '', ''],
};

function appReducer(
	state = initValue,
	action: {
		type: string;
		payload?: IStore;
	},
) {
	switch (action.type) {
		case 'CHANGE_PLAYER_TURN':
			return {
				...state,
				currentPlayerStore: state.currentPlayerStore === 'X' ? 'O' : 'X',
			};
		case 'END_GAME':
			return {
				...state,
				isGameEndedStore: true,
			};
		case 'SET_DRAW':
			return {
				...state,
				isGameEndedStore: true,
				isDrawStore: true,
			};
		case 'SET_MARK':
			if (action.payload?.fieldStore)
				return {
					...state,
					fieldStore: [...action.payload?.fieldStore],
				};
			return state;
		case 'RESTART_GAME':
			return { ...initValue };
		default:
			return state;
	}
}

// @ts-ignore
export let store = createStore(appReducer);
