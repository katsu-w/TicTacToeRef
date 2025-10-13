import FieldLayout from './FieldLayout';
import { store } from '../../store.ts';
import { useEffect, useState } from 'react';

export function Field() {
	const { fieldStore, isGameEndedStore, currentPlayerStore } = store.getState();
	const [field, setField] = useState(fieldStore);
	const [currentPlayer, setCurrentPlayer] = useState(currentPlayerStore);
	const [isGameEnded, setIsGameEnded] = useState(isGameEndedStore);

	useEffect(() => {
		const unsubscribe = store.subscribe(() => {
			const { fieldStore, isGameEndedStore, currentPlayerStore } = store.getState();
			setIsGameEnded(isGameEndedStore);
			setField(fieldStore);
			setCurrentPlayer(currentPlayerStore);
		});
		return () => unsubscribe();
	}, []);

	// define onClick function
	function onClick(index: number) {
		if (!isGameEnded && !field[index]) {
			let newField = field;
			newField[index] = currentPlayer;
			store.dispatch({ type: 'SET_MARK', payload: { fieldStore: newField } });
		}
	}

	return <FieldLayout onClick={onClick} field={field}></FieldLayout>;
}
