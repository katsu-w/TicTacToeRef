import InformationLayout from './InformationLayout';
import { connect, useSelector } from 'react-redux';
import {
	currentPlayerSelector,
	isDrawSelector,
	isGameEndedSelector,
} from '../../selectors/selectors.ts';
import type { currentPlayerType, IStore } from '../../types/types.ts';
import { Component } from 'react';

export class CInformation extends Component<any, IStore> {
	output: string = 'Непредвиденная ошибка, перезапустите страницу.';
	
	constructor(props: any) {
		super(props);
	}
	
	getOutput() {
		if (this.props.isGameEndedStore && this.props.isDrawStore) {
			this.output = 'Ничья';
		} else if (this.props.isGameEndedStore && !this.props.isDrawStore) {
			this.output = `Победа: ${this.props.currentPlayerStore}`;
		} else if (!this.props.isGameEndedStore && this.props.isDrawStore) {
			this.output = 'Непредвиденная ошибка, перезапустите страницу';
		} else {
			this.output = `Ходит: ${this.props.currentPlayerStore}`;
		}
		
	}
	
	render() {
		this.getOutput();
		return <InformationLayout>{this.output}</InformationLayout>;
	}
}

const mapStateToProps = (state: IStore): IStore => ({
	fieldStore: state.fieldStore,
	isGameEndedStore: state.isGameEndedStore,
	isDrawStore: state.isDrawStore,
	currentPlayerStore: state.currentPlayerStore,
});

export const Information = connect(mapStateToProps)(CInformation);

export function FInformation() {
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
