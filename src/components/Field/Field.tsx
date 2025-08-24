import FieldLayout from './FieldLayout';

interface IField {
	field: string[],
	isGameEnded: boolean,
	setTurn: (index: number) => void,
}

export function Field(props: IField) {
	const { field, setTurn, isGameEnded } = props;
	
	function onClick(index: number) {
		if (!isGameEnded) {
			setTurn(index);
		}
	}
	
	return (
		<FieldLayout onClick={onClick} field={field}></FieldLayout>
	);
}
