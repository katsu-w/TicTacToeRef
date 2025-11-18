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
			<button
				onClick={() => this.props.onClick()}
				className="px-4 py-2 mt-1 mx-auto mb-5 text-(--color-font) bg-(--color-accent) rounded-2xl shadow-(--shadow) transition-(--transition) hover:transform-[scale(1.05)] max-sm:mb-[90px]"
			>
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
