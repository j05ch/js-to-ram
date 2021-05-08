import * as React from 'react';
import { labels } from '../../../models/labels';
import useLanguage from '../../../hooks/useLanguageContext';

const CpuContainer: React.FC = () => {
	const locale = useLanguage().language;

	return (
		<>
			<div className="p-4 flex justify-center text-white font-bold">
				{labels[locale].CPU_HEADER}
			</div>
		</>
	);
};

export default CpuContainer;
