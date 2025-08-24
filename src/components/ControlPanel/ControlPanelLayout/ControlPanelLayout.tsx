import './ControlPanelLayout.scss';

interface IControlPanelLayoutProps {
	onClick: () => void,
}

export function ControlPanelLayout({onClick}: IControlPanelLayoutProps) {
	
	return (
		<button onClick={() => onClick()} className="retry-btn">
			Начать заново
		</button>
	);
}
