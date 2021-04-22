import * as React from 'react';

interface Props {
	register: number;
	index: number;
	mark: boolean;
}

const Register: React.FC<Props> = ({ register, index, mark }) => {
	const colorMark = mark
		? 'bg-pink-500 text-white font-bold'
		: 'text-blue-800';

	return (
		<>
			<div className={colorMark}>
				<div>
					<div>
						{index}:{register}
					</div>
				</div>
			</div>
		</>
	);
};

export default Register;
