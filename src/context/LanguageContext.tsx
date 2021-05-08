import React, { createContext } from 'react';
import { LOCALES } from '../models/locales';

export const LanguageContext = createContext({
	language: LOCALES.DE,
	changeLanguage: (locale: LOCALES) => {},
});
