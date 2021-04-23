import * as React from 'react';
import { labels } from '../../../models/labels';
import { useEffect, useState } from 'react';
import Register from '../register';
import { DE } from '../../../models/locales';

interface Props {
	register: number[];
	changed: number[];
}

const RegisterContainer: React.FC<Props> = ({ register, changed }) => {
	const [locale, setLocale] = useState(DE);

	useEffect(() => setLocale(DE), []);

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
