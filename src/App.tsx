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
	}
	
	componentDidUpdate() {
		this.setDraw();
		if (this.checkIsVictory()) {
			this.props.endGame();
			return;
		}
		// will be initialized only on turn or draw
	  this.props.changePlayer();
	}
	
	setDraw() {
		if (this.checkIsDraw() && !this.checkIsVictory()) {
			this.props.setDraw();
		}
	}
	
	checkIsDraw() {
		return !this.props.fieldStore.includes('');
	}
	
	checkIsVictory() {
		for (const pattern of WIN_PATTERNS) {
			if (
				this.props.fieldStore[pattern[0]] === this.props.fieldStore[pattern[1]] &&
				this.props.fieldStore[pattern[1]] === this.props.fieldStore[pattern[2]] &&
				this.props.fieldStore[pattern[0]] !== ''
			)
				return true;
		}
		return false;
	}

	render() {
		return <AppLayout />;
	}
}

const mapStateToProps = (state: IStore): IStore => ({
	fieldStore: state.fieldStore,
	isGameEndedStore: false,
	isDrawStore: false,
	currentPlayerStore: 'X',
});

const mapDispatchToProps = (dispatch: any) => ({
	endGame: () => dispatch({ type: 'END_GAME' }),
	setDraw: () => dispatch({ type: 'SET_DRAW' }),
	changePlayer: () => dispatch({ type: 'CHANGE_PLAYER_TURN' }),
})

// @ts-ignore
export const App = connect<{ store: IStore }>(mapStateToProps, mapDispatchToProps)(CApp);

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
