import FieldLayout from './FieldLayout';
import { useState } from 'react';
import { store } from '../../store.ts';

interface IFieldProps {
	field: string[];
	isGameEnded: boolean;
	setTurn: (index: number) => void;
}

export function Field(props: IFieldProps) {
	const { field, setTurn, isGameEnded } = props;
	// const { fieldStore } = store.getState();
	// const [field, setField] = useState(fieldStore);
	// store.subscribe(() => setField())

	// define onClick function
	function onClick(index: number) {
		if (!isGameEnded) {
			setTurn(index);
		}
	}

	return <FieldLayout onClick={onClick} field={field}></FieldLayout>;
}
