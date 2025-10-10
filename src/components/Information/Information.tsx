import InformationLayout from './InformationLayout';
import { store } from '../../store.ts';
import { useEffect, useState } from 'react';

export function Information() {
	const { currentPlayerStore, isDrawStore, isGameEndedStore } = store.getState();
	const [currentPlayer, setCurrentPlayer] = useState(currentPlayerStore);
	const [isDraw, setIsDraw] = useState(isDrawStore);
	const [isGameEnded, setIsGameEnded] = useState(isGameEndedStore);

	useEffect(() => {
		const unsubscribe = store.subscribe(() => {
			const { isDrawStore, currentPlayerStore, isGameEndedStore } = store.getState();
			setIsGameEnded(isGameEndedStore);
			setIsDraw(isDrawStore);
			setCurrentPlayer(currentPlayerStore);
		});
		return () => unsubscribe();
	}, []);

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
