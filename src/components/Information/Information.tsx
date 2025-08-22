import InformationLayout from './InformationLayout';

interface IInformation {
	currentPlayer: 'X' | 'O',
	isGameEnded: boolean,
	isDraw: boolean,
}

export function Information(props: IInformation) {
	
	return (
		<InformationLayout />
	);
}
