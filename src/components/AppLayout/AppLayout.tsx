import './AppLayout.scss';
import Information from '../Information';
import Field from '../Field';
import ControlPanel from '../ControlPanel';

interface IAppProps {
	currentPlayer: 'X' | 'O';
	isGameEnded: boolean;
	isDraw: boolean;
	field: string[];
	setTurn: (index: number) => void;
	clearField: () => void;
}

export function AppLayout(props: IAppProps) {
	const { currentPlayer, isGameEnded, isDraw, field, setTurn, clearField } = props;
	return (
		<main className="game container">
			<Information
				isGameEnded={isGameEnded}
				currentPlayer={currentPlayer}
				isDraw={isDraw}
			/>
			<Field field={field} setTurn={setTurn} isGameEnded={isGameEnded} />
			<ControlPanel clearField={clearField} />
		</main>
	);
}
