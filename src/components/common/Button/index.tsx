import * as React from 'react';

interface Props {
	onClick: () => void;
	primary?: boolean;
	secondary?: boolean;
	label: string;
}

const Button: React.FC<Props> = ({ onClick, primary, secondary, label }) => {
	const btnStyles = primary
		? 'bg-blue-700 text-white hover:bg-blue-900'
		: secondary
		? 'bg-yellow-400 text-white hover:bg-yellow-500'
		: 'border border-gray-700 bg-white text-gray-700 hover:bg-gray-700 hover:text-white';

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
