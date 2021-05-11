import * as React from 'react';
import { useContext } from 'react';
import { LanguageContext } from '../context/LanguageContext';

/**
 * Hook for using language-context.
 */
export default function useLanguage() {
	return useContext(LanguageContext);
}
