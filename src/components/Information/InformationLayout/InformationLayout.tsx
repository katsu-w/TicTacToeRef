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
			<div className="max-w-[80%] mt-22 sm:mt-5 mx-auto mb-1 px-4 py-2 text-center bg-(--color-accent) rounded-2xl shadow-(--shadow)">
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
