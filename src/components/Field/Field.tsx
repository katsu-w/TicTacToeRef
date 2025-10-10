import FieldLayout from './FieldLayout';
import { store } from '../../store.ts';
import { useEffect, useState } from 'react';

interface IFieldProps {
	setTurn: (index: number) => void;
}

export function Field(props: IFieldProps) {
	const { setTurn } = props;
	const { fieldStore, isGameEndedStore } = store.getState();
	const [field, setField] = useState(fieldStore);
	const [isGameEnded, setIsGameEnded] = useState(isGameEndedStore);

	useEffect(() => {
		const unsubscribe = store.subscribe(() => {
			const { fieldStore, isGameEndedStore } = store.getState();
			setIsGameEnded(isGameEndedStore);
			setField(fieldStore);
		});
		return () => unsubscribe();
	}, []);

	// define onClick function
	function onClick(index: number) {
		if (!isGameEnded) {
			setTurn(index);
		}
	}

	return <FieldLayout onClick={onClick} field={field}></FieldLayout>;
}
