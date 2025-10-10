import { useEffect, useState } from 'react';
import { WIN_PATTERNS } from '../constants/constants.ts';
import { store } from '../store.ts';

export function useGame() {
	const { fieldStore, currentPlayerStore } = store.getState();
	// const required states
	const [currentPlayer, setCurrentPlayer] = useState(currentPlayerStore);
	const [field, setField] = useState(fieldStore);

	useEffect(() => {
		const unsubscribe = store.subscribe(() => {
			const { fieldStore, currentPlayerStore } = store.getState();
			setCurrentPlayer(currentPlayerStore);
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

	// add mark on field func
	function setTurn(index: number) {
		if (field[index]) return;

		// setField((prevState) => {
		// 	let newField = [...prevState];
		// 	newField[index] = currentPlayer;
		// 	return newField;
		// });
		let newField = field;
		newField[index] = currentPlayer;
		console.log(newField);
		store.dispatch({ type: 'SET_MARK', payload: { fieldStore: newField } });
	}

	// clear field and set game ended / draw to false
	function clearField() {
		store.dispatch({ type: 'RESTART_GAME' });
	}

	return {
		setTurn,
		clearField,
	};
}
