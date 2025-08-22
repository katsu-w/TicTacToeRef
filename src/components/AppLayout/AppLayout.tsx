import './AppLayout.scss';
import Information from '../Information';
import Field from '../Field';
import ControlPanel from '../ControlPanel';

interface IApp {
	currentPlayer: 'X' | 'O',
	isGameEnded: boolean,
	isDraw: boolean,
	field: string[],
}

export function AppLayout(props: IApp) {
	const { currentPlayer, isGameEnded, isDraw, field } = props;
	return (
		<main
			className="game container"
		>
			<Information />
			<Field field={field} currentPlayer={currentPlayer} isGameEnded={isGameEnded} />
			<ControlPanel isGameEnded={isGameEnded} />
		</main>
	);
}
