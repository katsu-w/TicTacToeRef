import './styles/main.scss';
import AppLayout from './components/AppLayout';
import { useGame } from './hooks/useGame.ts';

export function App() {
	const { currentPlayer, isGameEnded, isDraw, field, setTurn, clearField } = useGame();

	return (
		<AppLayout
			currentPlayer={currentPlayer}
			isGameEnded={isGameEnded}
			isDraw={isDraw}
			field={field}
			setTurn={setTurn}
			clearField={clearField}
		/>
	);
}
