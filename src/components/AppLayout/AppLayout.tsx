import Information from '../Information';
import Field from '../Field';
import ControlPanel from '../ControlPanel';
import { Component } from 'react';

export class AppLayout extends Component<any, any> {
	constructor(props: any) {
		super(props);
	}
	
	render() {
		return (
			<main className="flex flex-col justify-between items-center h-dvh max-w-[1110px] mx-auto">
				<Information />
				<Field />
				<ControlPanel />
			</main>
		);
	}
}

export function FAppLayout() {
	return (
		<main className="game container">
			<Information />
			<Field />
			<ControlPanel />
		</main>
	);
}
