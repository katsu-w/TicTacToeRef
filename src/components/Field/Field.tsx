import FieldLayout from './FieldLayout';

interface IField {
	field: string[],
	currentPlayer: 'X' | 'O',
	isGameEnded: boolean,
}

export function Field(props: IField) {
	const { field, currentPlayer, isGameEnded } = props;
	
	return (
		<FieldLayout field={field}></FieldLayout>
	);
}
