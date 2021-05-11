import * as React from 'react';

interface Props {
	register: number;
	index: number;
	mark: boolean;
}

/**
 * Component that holds one register.
 * @param register
 * @param index
 * @param mark
 * @returns {JSX.Element}
 */
const Register: React.FC<Props> = ({ register, index, mark }) => {
	const colorMark = mark
		? 'bg-pink-500 text-white font-bold'
		: 'text-blue-800';

	return (
		<>
			{index === 0 ? (
				<div
					className={`p-1 pr-4 border-4 border-yellow-500 flex justify-between bg-yellow-500 ${colorMark}`}
				>
					<div>
						{index}:{register}
					</div>
					<div className="font-bold">ACC</div>
				</div>
			) : (
				<div className={colorMark}>
					<div className="p-1 pl-1.5">
						{index}:{register}
					</div>
				</div>
			)}
		</>
	);
};

export default Register;
