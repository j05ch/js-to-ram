import * as React from 'react';
import { labels } from '../../../models/labels';
import Register from '../register';
import useLanguage from '../../../hooks/useLanguageContext';

interface Props {
	register: number[];
	changed: number[];
}

/**
 * Container for registers.
 * @param register
 * @param changed
 * @returns {JSX.Element}
 */
const RegisterContainer: React.FC<Props> = ({ register, changed }) => {
	const locale = useLanguage().language;

	function getRegisters() {
		return register.map((r, index) =>
			changed.includes(index) ? (
				<Register register={r} index={index} key={index} mark />
			) : (
				<Register register={r} index={index} key={index} mark={false} />
			)
		);
	}

	return (
		<div className="p-1">
			<h1 className="text-blue-800 font-bold">
				{' '}
				{labels[locale].REGISTER_HEADER}
			</h1>
			<div>{getRegisters()}</div>
		</div>
	);
};

export default RegisterContainer;
