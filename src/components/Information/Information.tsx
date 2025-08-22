import InformationLayout from './InformationLayout';

interface IInformation {
	currentPlayer: 'X' | 'O',
	isGameEnded: boolean,
	isDraw: boolean,
}

export function Information(props: IInformation) {
	const { currentPlayer, isDraw, isGameEnded } = props;
	
	return (
		<InformationLayout />
	);
}
