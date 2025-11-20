import { Component } from 'react';

interface IFieldLayoutProps {
	field: string[];
	onClick: (index: number) => void;
}

export class FieldLayout extends Component<any, any> {
	constructor(props: IFieldLayoutProps) {
		super(props);
	}
	render() {
		return (
			<section className="font-(family-name:--playground-font) text-8xl sm:text-9xl grid grid-cols-3 grid-rows-3 gap-[10px] sm:gap-4 max-w-80 max-h-80 sm:max-w-112 sm:max-h-112 md:max-w-125 md:max-h-125 w-full h-full bg-(--color-playground) rounded-2xl">
				{this.props.field.map((cell: string, index: number) => (
					<button
						key={index}
						className="text-(--color-accent) bg-(--color-light) rounded-2xl p-0 shadow-(--shadow) transition-(--transition) select-none hover:transform-[scale(1.05)]"
						onClick={() => this.props.onClick(index)}
					>
						{cell}
					</button>
				))}
			</section>
		);
	}
}

export function FFieldLayout({ field, onClick }: IFieldLayoutProps) {
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
