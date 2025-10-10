import './styles/main.scss';
import AppLayout from './components/AppLayout';
import { useGame } from './hooks/useGame.ts';

export function App() {
	const { setTurn, clearField } = useGame();

	return <AppLayout setTurn={setTurn} clearField={clearField} />;
}
