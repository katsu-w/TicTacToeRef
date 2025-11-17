import FieldLayout from './FieldLayout';
import type {
	currentPlayerType,
	fieldType,
	IStore,
} from '../../types/types.ts';
import { connect, useDispatch, useSelector } from 'react-redux';
import {
	currentPlayerSelector,
	fieldSelector,
	isGameEndedSelector,
} from '../../selectors/selectors.ts';
import { Component } from 'react';

export class CField extends Component<any, any> {
	constructor(props: any) {
		super(props);
	}
	
	onClick = (index: number) => {
		if (!this.props.isGameEndedStore && !this.props.fieldStore[index]) {
			let newField = [...this.props.fieldStore];
			newField[index] = this.props.currentPlayerStore;
			this.props.dispatch({ type: 'SET_MARK', payload: { fieldStore: newField } });
		}
	}
	
	render() {
		return <FieldLayout onClick={this.onClick} field={this.props.fieldStore}></FieldLayout>;
	}
}

const mapStateToProps = (state: IStore): IStore => ({
	fieldStore: state.fieldStore,
	isGameEndedStore: state.isGameEndedStore,
	isDrawStore: state.isDrawStore,
	currentPlayerStore: state.currentPlayerStore,
});

export const Field = connect(mapStateToProps)(CField);

export function FField() {
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
