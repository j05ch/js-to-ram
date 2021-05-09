import * as React from 'react';

interface Props {
	onClick: () => void;
	primary?: boolean;
	secondary?: boolean;
	label: string;
	disabled?: boolean;
}

/**
 * Component that renders a enabled or disabled labeled primary, secondary, or tertiary button and sets its on-click function
 * @param onClick
 * @param primary
 * @param secondary
 * @param label
 * @param disabled
 * @returns {JSX.Element}
 */
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
