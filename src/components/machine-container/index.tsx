import * as React from 'react';
import Debug from '../debug/debug';

interface Props {
	programArray: string[][];
}

const MachineContainer: React.FC<Props> = ({ programArray }) => {
	return (
		<div className="dark:text-blue-50">
			<Debug data={programArray} />
		</div>
	);
};

export default MachineContainer;
