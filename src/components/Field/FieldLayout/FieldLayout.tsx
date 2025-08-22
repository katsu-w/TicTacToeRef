import './FieldLayout.scss';
import type { FC, ReactNode } from 'react';

interface IFieldLayout {
	field: string[],
}

export function FieldLayout({field}: IFieldLayout){
	
	return (
		<div>
			{
				field.map(cell => (
					<div className="cell">{cell}</div>
				))
			}
		</div>
	);
}
