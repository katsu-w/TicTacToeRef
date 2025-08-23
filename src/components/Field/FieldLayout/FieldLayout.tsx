import './FieldLayout.scss';

interface IFieldLayout {
	field: string[],
}

export function FieldLayout({field}: IFieldLayout){
	
	return (
		<section className="playground">
			{
				field.map((cell, index) => (
					<button key={index} className="playground__cell">{cell}</button>
				))
			}
		</section>
	);
}
