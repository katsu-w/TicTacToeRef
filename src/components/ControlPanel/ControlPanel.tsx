import ControlPanelLayout from './ControlPanelLayout';
import { connect, useDispatch } from 'react-redux';
import { Component } from 'react';

export class CControlPanel extends Component<any, any> {
	constructor(props: any) {
		super(props);
	}
	
	clearField = () => {
		this.props.dispatch({ type: 'RESTART_GAME' });
	};
	
	render() {
		return <ControlPanelLayout onClick={this.clearField}></ControlPanelLayout>;
	}
}

export const ControlPanel = connect(null)(CControlPanel);

export function FControlPanel() {
	const dispatch = useDispatch();

	const clearField = () => {
		dispatch({ type: 'RESTART_GAME' });
	};

	return <ControlPanelLayout onClick={clearField}></ControlPanelLayout>;
}
