import * as React from 'react';

interface Props {
	register: number;
	index: number;
	mark: boolean;
}

const Register: React.FC<Props> = ({ register, index, mark }) => {
	const colorMark = mark ? 'dark:bg-red-700' : '';

	return (
		<>
			<div className={`dark:text-blue-50 ${colorMark}`}>
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
