import FieldLayout from './FieldLayout';

interface IField {
	field: string[],
	isGameEnded: boolean,
	setTurn: (index: number) => void,
}

export function Field(props: IField) {
	const { field, setTurn, isGameEnded } = props;
	
	// define onClick function
	function onClick(index: number) {
		if (!isGameEnded) {
			setTurn(index);
		}
	}
	
	return (
		<FieldLayout onClick={onClick} field={field}></FieldLayout>
	);
}
