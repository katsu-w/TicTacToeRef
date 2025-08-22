import ControlPanelLayout from './ControlPanelLayout';

interface IControlPanel {
	isGameEnded: boolean,
}

export function ControlPanel(props: IControlPanel) {
	const { isGameEnded } = props;
	
	return (
		<ControlPanelLayout />
	);
}
