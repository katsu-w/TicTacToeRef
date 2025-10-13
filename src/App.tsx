import './styles/main.scss';
import AppLayout from './components/AppLayout';
import { store } from './store.ts';
import { WIN_PATTERNS } from './constants/constants.ts';
import { useEffect, useState } from 'react';

export function App() {
	const { fieldStore } = store.getState();
	// const required states
	const [field, setField] = useState(fieldStore);

	useEffect(() => {
		const unsubscribe = store.subscribe(() => {
			const { fieldStore } = store.getState();
			setField(fieldStore);
		});
		return () => unsubscribe();
	}, []);

	// check for game end and change current player
	useEffect(() => {
		setDraw();
		if (checkIsVictory()) {
			store.dispatch({ type: 'END_GAME' });
			return;
		}
		// will be initialized only on turn or draw
		changeCurrentPlayer();
	}, [field]);

	// check if someone is won
	function checkIsVictory() {
		for (const pattern of WIN_PATTERNS) {
			if (
				field[pattern[0]] === field[pattern[1]] &&
				field[pattern[1]] === field[pattern[2]] &&
				field[pattern[0]] !== ''
			)
				return true;
		}
		return false;
	}

	// check if there is no free cells
	function checkIsDraw() {
		return !field.includes('');
	}

	// change current turn player func
	function changeCurrentPlayer() {
		if (field.includes('X') || field.includes('O')) {
			store.dispatch({ type: 'CHANGE_PLAYER_TURN' });
		}
	}

	function setDraw() {
		if (checkIsDraw() && !checkIsVictory()) {
			store.dispatch({ type: 'SET_DRAW' });
		}
	}

	return <AppLayout />;
}
