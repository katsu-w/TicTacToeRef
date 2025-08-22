import './AppLayout.scss';
import Information from '../Information';
import Field from '../Field';
import ControlPanel from '../ControlPanel';

export function AppLayout() {
	
	return (
		<main
			className="game container"
		>
			<Information />
			<Field />
			<ControlPanel />
		</main>
	);
}
