import * as React from 'react';

interface Props {
	onClick: () => void;
	primary?: boolean;
	secondary?: boolean;
	label: string;
	disabled?: boolean;
}

const Button: React.FC<Props> = ({
	onClick,
	primary,
	secondary,
	label,
	disabled,
}) => {
	let btnStyles = primary
		? 'bg-blue-700 text-white hover:bg-blue-900'
		: secondary
		? 'bg-gray-700 text-white hover:bg-white hover:text-gray-700 border border-gray-700'
		: 'border border-gray-700 bg-white text-gray-700 hover:bg-gray-700 hover:text-white';

	btnStyles = disabled ? 'bg-gray-400 text-gray-600' : btnStyles;
	onClick = disabled ? () => {} : onClick;

	return (
		<button
			className={`w-36 p-1 rounded font-bold ${btnStyles}`}
			onClick={() => onClick()}
		>
			{label}
		</button>
	);
};

export default Button;
