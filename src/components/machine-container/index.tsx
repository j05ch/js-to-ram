import * as React from 'react';
import { labels } from '../../models/labels';
import ProgramInput from '../program-input';
import { useState } from 'react';

interface Props {}

const MachineContainer: React.FC<Props> = () => {
	const [programString, setProgramString] = useState('');

	return (
		<div className="dark:bg-black">
			<h1 className="dark:text-blue-50">{labels.DE.RAM_HEADER}</h1>
			<button className="dark:text-blue-50">Button OPEN</button>
			<ProgramInput setState={setProgramString} />
			<button className="dark:text-blue-50">Button LOAD</button>
			<div className="dark:text-blue-50">Component MACHINE</div>
		</div>
	);
};

export default MachineContainer;
