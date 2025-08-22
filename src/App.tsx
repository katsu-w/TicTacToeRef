import './styles/main.scss'
import AppLayout from './components/AppLayout';
import { useState } from 'react';

export function App() {
	
	const [currentPlayer, setCurrentPlayer] = useState<'X' | 'O'>('X');
	const [isGameEnded, setIsGameEnded] = useState<boolean>(false);
	const [isDraw, setIsDraw] = useState<boolean>(false);
	
	const [field, setField] = useState([
		'', '', '',
		'', 'X', '',
		'', '', '',
	]);

  return (
		<AppLayout
			currentPlayer={currentPlayer}
			isGameEnded={isGameEnded}
			isDraw={isDraw}
			field={field}
		/>
  )
}
