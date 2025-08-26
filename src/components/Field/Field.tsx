import FieldLayout from './FieldLayout';

interface IFieldProps {
	field: string[];
	isGameEnded: boolean;
	setTurn: (index: number) => void;
}

export function Field(props: IFieldProps) {
	const { field, setTurn, isGameEnded } = props;

	// define onClick function
	function onClick(index: number) {
		if (!isGameEnded) {
			setTurn(index);
		}
	}

	return <FieldLayout onClick={onClick} field={field}></FieldLayout>;
}
