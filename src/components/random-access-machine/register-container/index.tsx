import * as React from 'react';
import { labels } from '../../../models/labels';
import { useEffect, useState } from 'react';
import Register from '../register';

interface Props {
	register: number[];
	changed: number[];
}

const RegisterContainer: React.FC<Props> = ({ register, changed }) => {
	const [locale, setLocale] = useState('DE');

	useEffect(() => setLocale('DE'), []);

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
		<>
			<div>
				<h1> {labels[locale].REGISTER_HEADER};</h1>
				<div>{getRegisters()}</div>
			</div>
		</>
	);
};

export default RegisterContainer;
