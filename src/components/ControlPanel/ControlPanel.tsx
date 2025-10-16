import ControlPanelLayout from './ControlPanelLayout';
import { useDispatch } from 'react-redux';

export function ControlPanel() {
	const dispatch = useDispatch();

	const clearField = () => {
		dispatch({ type: 'RESTART_GAME' });
	};

	return <ControlPanelLayout onClick={clearField}></ControlPanelLayout>;
}
