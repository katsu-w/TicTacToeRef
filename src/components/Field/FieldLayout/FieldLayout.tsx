import './FieldLayout.scss';

interface IFieldLayoutProps {
	field: string[];
	onClick: (index: number) => void;
}

export function FieldLayout({ field, onClick }: IFieldLayoutProps) {
	console.log(field);
	return (
		<section className="playground">
			{field.map((cell, index) => (
				<button
					key={index}
					className="playground__cell"
					onClick={onClick ? () => onClick(index) : undefined}
				>
					{cell}
				</button>
			))}
		</section>
	);
}
