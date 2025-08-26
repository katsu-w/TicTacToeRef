import './InformationLayout.scss';
import type { ReactNode } from 'react';

interface IInformationLayoutProps {
	children: ReactNode;
}

export function InformationLayout({ children }: IInformationLayoutProps) {
	return (
		<div className="information">
			<span>{children}</span>
		</div>
	);
}
