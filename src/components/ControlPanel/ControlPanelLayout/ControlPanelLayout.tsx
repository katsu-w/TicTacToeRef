import './ControlPanelLayout.scss';
import { Component } from 'react';

interface IControlPanelLayoutProps {
	onClick: () => void;
}

export class ControlPanelLayout extends Component<any, any> {
	constructor(props: IControlPanelLayoutProps) {
		super(props);
	}
	
	render() {
		return (
			<button onClick={() => this.props.onClick()} className="retry-btn">
				Начать заново
			</button>
		);
	}
}

export function FControlPanelLayout({ onClick }: IControlPanelLayoutProps) {
	return (
		<button onClick={() => onClick()} className="retry-btn">
			Начать заново
		</button>
	);
}
