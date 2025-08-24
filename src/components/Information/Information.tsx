import InformationLayout from './InformationLayout';

interface IInformation {
	currentPlayer: 'X' | 'O',
	isGameEnded: boolean,
	isDraw: boolean,
}

export function Information(props: IInformation) {
	const { currentPlayer, isDraw, isGameEnded } = props;
	let output: string;
	
	// define text to output
	if (isGameEnded && isDraw) {
		output = 'Ничья';
	} else if (isGameEnded && !isDraw) {
		output = `Победа: ${currentPlayer}`;
	} else if (!isGameEnded && isDraw) {
		output = 'Непредвиденная ошибка, перезапустите страницу';
	} else {
		output = `Ходит: ${currentPlayer}`;
	}
	
	return (
		<InformationLayout>{output}</InformationLayout>
	);
}
