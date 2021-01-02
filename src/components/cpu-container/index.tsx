import * as React from 'react';
import { labels } from '../../models/labels';

const CpuContainer: React.FC = () => {
	return (
		<>
			<div>{labels.DE.CPU_HEADER}</div>
		</>
	);
};

export default CpuContainer;
