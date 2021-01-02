import * as React from 'react';
import { labels } from '../../models/labels';

interface Props {
	programCounter: number;
}

const ProgramCounterContainer: React.FC<Props> = ({ programCounter }) => {
	return (
		<>
			<div>
				<div className="dark:text-blue-50">
					{labels.DE.PROGRAM_COUNTER_HEADER}
				</div>
				<div>{programCounter}</div>
			</div>
		</>
	);
};

export default ProgramCounterContainer;
