import * as React from 'react';
import { labels } from '../../models/labels';

interface Props {}

const RegisterContainer: React.FC<Props> = () => {
	return (
		<>
			<div>
				<h1>{labels.DE.REGISTER_HEADER}</h1>
			</div>
		</>
	);
};

export default RegisterContainer;
