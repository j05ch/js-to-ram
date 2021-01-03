import * as React from 'react';

interface Props {
	register: number;
	index: number;
	programCounter: number;
}

const Register: React.FC<Props> = ({ register, index, programCounter }) => {
	return (
		<>
			<div className="dark:text-blue-50">
				<div>
					<div>
						{index}:{register}
					</div>
				</div>
				{programCounter === index && <div>@</div>}
			</div>
		</>
	);
};

export default Register;
