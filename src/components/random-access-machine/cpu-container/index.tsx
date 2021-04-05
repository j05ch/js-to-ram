import * as React from 'react';
import { labels } from '../../../models/labels';
import { useEffect, useState } from 'react';

const CpuContainer: React.FC = () => {
	const [locale, setLocale] = useState('DE');

	useEffect(() => setLocale('DE'), []);

	return (
		<>
			<div>{labels[locale].CPU_HEADER}</div>
		</>
	);
};

export default CpuContainer;
