import './styles/main.scss';
import AppLayout from './components/AppLayout';
import { WIN_PATTERNS } from './constants/constants.ts';
import { Component, useEffect } from 'react';
import type { fieldType, IStore } from './types/types.ts';
import { connect, useDispatch, useSelector } from 'react-redux';
import { fieldSelector } from './selectors/selectors.ts';

export class CApp extends Component<any, IStore> {
	constructor(props: any) {
		super(props);
		this.state = {
			fieldStore: props.fieldStore,
			currentPlayerStore: props.currentPlayerStore,
			isGameEndedStore: props.isGameEndedStore,
			isDrawStore: props.isDrawStore,
		};
	}
	
	componentDidUpdate () {
		console.log('update');
		this.setDraw();
		if (this.checkIsVictory()) {
			console.log('checkIsVictory');
			this.props.dispatch({ type: 'END_GAME' });
			return;
		}
		// will be initialized only on turn or draw
		this.changeCurrentPlayer();
	}
	
	setDraw() {
		if (this.checkIsDraw() && !this.checkIsVictory()) {
			this.props.dispatch({ type: 'SET_DRAW' });
		}
	}
	
	checkIsDraw() {
		return !this.state.fieldStore.includes('');
	}
	
	checkIsVictory() {
		for (const pattern of WIN_PATTERNS) {
			if (
				this.state.fieldStore[pattern[0]] === this.state.fieldStore[pattern[1]] &&
				this.state.fieldStore[pattern[1]] === this.state.fieldStore[pattern[2]] &&
				this.state.fieldStore[pattern[0]] !== ''
			)
				return true;
		}
		return false;
	}
	
	changeCurrentPlayer() {
		console.log(this.state.fieldStore);
		if (this.state.fieldStore.includes('X') || this.state.fieldStore.includes('O')) {
			console.log('dispatch changeCurrentPlayer');
			this.props.dispatch({ type: 'CHANGE_PLAYER_TURN' });
		}
	}

	render() {
		console.log(this.state);
		return <AppLayout />;
	}
}

const mapStateToProps = (state: IStore): IStore => ({
	fieldStore: state.fieldStore,
	isGameEndedStore: state.isGameEndedStore,
	isDrawStore: state.isDrawStore,
	currentPlayerStore: state.currentPlayerStore,
});

// @ts-ignore
export const App = connect<{ store: IStore }>(mapStateToProps)(CApp);

export function FApp() {
	const field: fieldType = useSelector(fieldSelector);

	const dispatch = useDispatch();

	// check for game end and change current player
	useEffect(() => {
		setDraw();
		if (checkIsVictory()) {
			dispatch({ type: 'END_GAME' });
			return;
		}
		// will be initialized only on turn or draw
		changeCurrentPlayer();
	}, [field]);

	// check if someone is won
	function checkIsVictory() {
		for (const pattern of WIN_PATTERNS) {
			if (
				field[pattern[0]] === field[pattern[1]] &&
				field[pattern[1]] === field[pattern[2]] &&
				field[pattern[0]] !== ''
			)
				return true;
		}
		return false;
	}

	// check if there is no free cells
	function checkIsDraw() {
		return !field.includes('');
	}

	// change current turn player func
	function changeCurrentPlayer() {
		if (field.includes('X') || field.includes('O')) {
			dispatch({ type: 'CHANGE_PLAYER_TURN' });
		}
	}

	function setDraw() {
		if (checkIsDraw() && !checkIsVictory()) {
			dispatch({ type: 'SET_DRAW' });
		}
	}

	return <AppLayout />;
}
