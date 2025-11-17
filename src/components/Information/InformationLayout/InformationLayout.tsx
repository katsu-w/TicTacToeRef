import './InformationLayout.scss';
import { Component, type ReactNode } from 'react';

interface IInformationLayoutProps {
	children: ReactNode;
}

export class InformationLayout extends Component<any, any> {
	constructor(props: IInformationLayoutProps) {
		super(props);
	}
	
	render() {
		return (
			<div className="information">
				<span>{this.props.children}</span>
			</div>
		);
	}
}

export function FInformationLayout({ children }: IInformationLayoutProps) {
	return (
		<div className="information">
			<span>{children}</span>
		</div>
	);
}
