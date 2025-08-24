import './styles/main.scss'
import AppLayout from './components/AppLayout';
import { useState } from 'react';

export function App() {
	
	const [currentPlayer, setCurrentPlayer] = useState<'X' | 'O'>('X');
	const [isGameEnded, setIsGameEnded] = useState<boolean>(false);
	const [isDraw, setIsDraw] = useState<boolean>(false);
	
	const [field, setField] = useState([
		'', '', '',
		'', '', '',
		'', '', '',
	]);
	
	function setTurn(index: number) {
		if (field[index]) return;
		setField((prevState) => {
			let newField = [...prevState];
			newField[index] = currentPlayer;
			return newField;
		});
		setCurrentPlayer(prev => {
			return prev === 'X' ? 'O' : 'X';
		});
	}
	
	function clearField() {
		setField(
			['','','',
			'','','',
			'','','',]);
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
