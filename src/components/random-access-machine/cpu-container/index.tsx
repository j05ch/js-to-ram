import * as React from 'react';
import { labels } from '../../../models/labels';
import { useEffect, useState } from 'react';
import { DE } from '../../../models/locales';

const CpuContainer: React.FC = () => {
	const [locale, setLocale] = useState(DE);

	useEffect(() => setLocale(DE), []);

	return (
		<>
			<div className="p-4 flex justify-center text-white font-bold">
				{labels[locale].CPU_HEADER}
			</div>
		</>
	);
};

export default CpuContainer;
