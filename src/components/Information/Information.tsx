import InformationLayout from './InformationLayout';
import { useSelector } from 'react-redux';
import {
	currentPlayerSelector,
	isDrawSelector,
	isGameEndedSelector,
} from '../../selectors/selectors.ts';
import type { currentPlayerType } from '../../types/types.ts';

export function Information() {
	const currentPlayer: currentPlayerType = useSelector(currentPlayerSelector);
	const isDraw: boolean = useSelector(isDrawSelector);
	const isGameEnded: boolean = useSelector(isGameEndedSelector);

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

	return <InformationLayout>{output}</InformationLayout>;
}
