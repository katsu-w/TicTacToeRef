import './styles/main.scss'
import AppLayout from './components/AppLayout';
import { useEffect, useState } from 'react';
import { WIN_PATTERNS } from './constants/constants.ts';

export function App() {
	// const required states
	const [currentPlayer, setCurrentPlayer] = useState<'X' | 'O'>('X');
	const [isGameEnded, setIsGameEnded] = useState<boolean>(false);
	const [isDraw, setIsDraw] = useState<boolean>(false);
	
	const [field, setField] = useState([
		'', '', '',
		'', '', '',
		'', '', '',
	]);
	
	// check for game end and change current player
	useEffect(() => {
		if (checkIsDraw() && !checkIsVictory()) {
			setIsDraw(true);
			setIsGameEnded(true);
		}
		if (checkIsVictory()) {
			return setIsGameEnded(true);
		}
		if (
			field.includes('X') ||
			field.includes('O')
		) changeCurrentPlayer();
	}, [field]);
	
	// check if someone is won
	function checkIsVictory () {
		for (const pattern in WIN_PATTERNS) {
			if (
				field[WIN_PATTERNS[pattern][0]] === field[WIN_PATTERNS[pattern][1]] &&
				field[WIN_PATTERNS[pattern][1]] === field[WIN_PATTERNS[pattern][2]] &&
				field[WIN_PATTERNS[pattern][0]] !== ''
			) return true;
		}
		return false;
	}
	
	// check if there is no free cells
	function checkIsDraw() {
		return !field.includes('');
	}
	
	// change current turn player func
	function changeCurrentPlayer() {
		setCurrentPlayer(prev => {
			return prev === 'X' ? 'O' : 'X';
		});
	}
	
	// add mark on field func
	function setTurn(index: number) {
		if (field[index]) return;
		
		setField((prevState) => {
			let newField = [...prevState];
			newField[index] = currentPlayer;
			return newField;
		});
	}
	
	// clear field and set game ended / draw to false
	function clearField() {
		setField(
			['','','',
			'','','',
			'','','',]);
		setIsGameEnded(false);
		setIsDraw(false);
	}

  return (
		<AppLayout
			currentPlayer={currentPlayer}
			isGameEnded={isGameEnded}
			isDraw={isDraw}
			field={field}
			setTurn={setTurn}
			clearField={clearField}
		/>
  )
}
