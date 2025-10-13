import ControlPanelLayout from './ControlPanelLayout';
import { store } from '../../store.ts';

export function ControlPanel() {
	const clearField = () => {
		store.dispatch({ type: 'RESTART_GAME' });
	};

	return <ControlPanelLayout onClick={clearField}></ControlPanelLayout>;
}
