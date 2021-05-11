import React, { createContext } from 'react';
import { LOCALES } from '../models/locales';

/**
 * Context for multi-language-support.
 */
export const LanguageContext = createContext({
	language: LOCALES.DE,
	changeLanguage: (locale: LOCALES) => {},
});
