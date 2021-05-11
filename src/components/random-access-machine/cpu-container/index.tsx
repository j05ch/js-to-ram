import * as React from 'react';
import { labels } from '../../../models/labels';
import useLanguage from '../../../hooks/useLanguageContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog } from '@fortawesome/free-solid-svg-icons';

interface Props {
	animate: boolean;
}

/**
 * CPU-Component.
 * @param animate
 * @returns {JSX.Element}
 */
const CpuContainer: React.FC<Props> = ({ animate }) => {
	const locale = useLanguage().language;

	const spin = animate ? 'animate-spin' : '';

	return (
		<>
			<div className="p-4 flex justify-center text-white font-bold">
				<div className={`${spin} mr-2`}>
					<FontAwesomeIcon icon={faCog} />
				</div>
				{labels[locale].CPU_HEADER}
				<div className={`${spin} ml-2`}>
					<FontAwesomeIcon icon={faCog} />
				</div>
			</div>
		</>
	);
};

export default CpuContainer;
