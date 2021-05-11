import * as React from 'react';
import { useState } from 'react';
import { LanguageContext } from './LanguageContext';
import { LOCALES } from '../models/locales';

/**
 * Provider for language-context.
 * @param children
 * @returns returns {JSX.Element}
 */
const LanguageContextProvider: React.FC = ({ children }) => {
	const [language, setLanguage] = useState(LOCALES.DE);

	function changeLanguage(locale: LOCALES) {
		setLanguage(locale);
	}

	return (
		<LanguageContext.Provider value={{ language, changeLanguage }}>
			{children}
		</LanguageContext.Provider>
	);
};

export default LanguageContextProvider;
