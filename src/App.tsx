import './styles/main.scss'
import AppLayout from './components/AppLayout';
import { useEffect, useState } from 'react';
import { WIN_PATTERNS } from './constants/constants.ts';

export function App() {
	
	const [currentPlayer, setCurrentPlayer] = useState<'X' | 'O'>('X');
	const [isGameEnded, setIsGameEnded] = useState<boolean>(false);
	const [isDraw, setIsDraw] = useState<boolean>(false);
	
	const [field, setField] = useState([
		'', '', '',
		'', '', '',
		'', '', '',
	]);
	
	useEffect(() => {
		if (checkIsDraw() && !checkIsVictory()) {
			setIsDraw(true);
			setIsGameEnded(true);
		}
		if (checkIsVictory()) {
			return setIsGameEnded(true);
		}
		changeCurrentPlayer();
	}, [field]);
	
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
	
	function checkIsDraw() {
		return !field.includes('');
	}
	
	function changeCurrentPlayer() {
		setCurrentPlayer(prev => {
			return prev === 'X' ? 'O' : 'X';
		});
	}
	
	function setTurn(index: number) {
		if (field[index]) return;
		
		setField((prevState) => {
			let newField = [...prevState];
			newField[index] = currentPlayer;
			return newField;
		});
	}
	
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
