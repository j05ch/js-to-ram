import * as React from 'react';
import useLanguage from '../../../hooks/useLanguageContext';
import { LOCALES } from '../../../models/locales';

/**
 * Language-Switcher component.
 * @returns {JSX.Element}
 */
const LocaleSwitcher: React.FC = () => {
	const languageContext = useLanguage();

	return (
		<div className="flex">
			<div
				className="text-blue-800 p-2 cursor-pointer"
				onClick={() => languageContext.changeLanguage(LOCALES.DE)}
			>
				{LOCALES.DE}
			</div>
			<div
				className="text-blue-800 p-2 cursor-pointer"
				onClick={() => languageContext.changeLanguage(LOCALES.EN)}
			>
				{LOCALES.EN}
			</div>
		</div>
	);
};

export default LocaleSwitcher;
