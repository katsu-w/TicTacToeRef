import './FieldLayout.scss';

interface IFieldLayout {
	field: string[],
	onClick: (index: number) => void,
}

export function FieldLayout({field, onClick}: IFieldLayout){
	
	return (
		<section className="playground">
			{
				field.map((cell, index) => (
					<button key={index}
					        className="playground__cell"
					        onClick={onClick ? () => onClick(index) : undefined}
					>{cell}</button>
				))
			}
		</section>
	);
}
