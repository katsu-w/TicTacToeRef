import './styles/main.scss';
import AppLayout from './components/AppLayout';
import { WIN_PATTERNS } from './constants/constants.ts';
import { useEffect } from 'react';
import type { fieldType } from './types/types.ts';
import { useDispatch, useSelector } from 'react-redux';
import { fieldSelector } from './selectors/selectors.ts';

export function App() {
	const field: fieldType = useSelector(fieldSelector);

	const dispatch = useDispatch();

	// check for game end and change current player
	useEffect(() => {
		setDraw();
		if (checkIsVictory()) {
			dispatch({ type: 'END_GAME' });
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
			dispatch({ type: 'CHANGE_PLAYER_TURN' });
		}
	}

	function setDraw() {
		if (checkIsDraw() && !checkIsVictory()) {
			dispatch({ type: 'SET_DRAW' });
		}
	}

	return <AppLayout />;
}
