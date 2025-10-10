import './AppLayout.scss';
import Information from '../Information';
import Field from '../Field';
import ControlPanel from '../ControlPanel';

interface IAppProps {
	setTurn: (index: number) => void;
	clearField: () => void;
}

export function AppLayout(props: IAppProps) {
	const { setTurn, clearField } = props;
	return (
		<main className="game container">
			<Information />
			<Field setTurn={setTurn} />
			<ControlPanel clearField={clearField} />
		</main>
	);
}
