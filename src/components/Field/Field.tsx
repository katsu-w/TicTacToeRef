import FieldLayout from './FieldLayout';
import type { currentPlayerType, fieldType } from '../../types/types.ts';
import { useDispatch, useSelector } from 'react-redux';
import {
	currentPlayerSelector,
	fieldSelector,
	isGameEndedSelector,
} from '../../selectors/selectors.ts';

export function Field() {
	const currentPlayer: currentPlayerType = useSelector(currentPlayerSelector);
	const isGameEnded: boolean = useSelector(isGameEndedSelector);
	const field: fieldType = useSelector(fieldSelector);

	const dispatch = useDispatch();

	// define onClick function
	function onClick(index: number) {
		if (!isGameEnded && !field[index]) {
			let newField = [...field];
			newField[index] = currentPlayer;
			dispatch({ type: 'SET_MARK', payload: { fieldStore: newField } });
		}
	}

	return <FieldLayout onClick={onClick} field={field}></FieldLayout>;
}
