import * as React from 'react';

interface Props {
	register: number;
	index: number;
}

const Register: React.FC<Props> = ({ register, index }) => {
	return (
		<>
			<div className="dark:text-blue-50">
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
