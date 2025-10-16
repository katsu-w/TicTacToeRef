export type currentPlayerType = 'X' | 'O';
export type cellType = currentPlayerType | '';
export type fieldType = cellType[];

export interface IStore {
	fieldStore: fieldType;
	currentPlayerStore: currentPlayerType;
	isGameEndedStore: boolean;
	isDrawStore: boolean;
}
