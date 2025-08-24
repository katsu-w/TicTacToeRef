import ControlPanelLayout from './ControlPanelLayout';

interface IControlPanelProps {
	clearField: () => void,
}

export function ControlPanel({clearField}: IControlPanelProps) {
	
	return (
		<ControlPanelLayout onClick={clearField} ></ControlPanelLayout>
	);
}
