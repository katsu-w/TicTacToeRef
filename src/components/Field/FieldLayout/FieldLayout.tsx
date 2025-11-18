import './FieldLayout.scss';
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
			<section className="playground">
				{this.props.field.map((cell: string, index: number) => (
					<button
						key={index}
						className="playground__cell"
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
