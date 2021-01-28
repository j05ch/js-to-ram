import * as React from 'react';
import { labels } from '../../models/labels';
import { useEffect, useState } from 'react';
import Register from '../register';

interface Props {
	register: number[];
}

const RegisterContainer: React.FC<Props> = ({ register }) => {
	const [locale, setLocale] = useState('DE');

	useEffect(() => setLocale('DE'), []);

	function getRegisters() {
		return register.map((r, index) => (
			<Register register={r} index={index} key={index} />
		));
	}

	return (
		<>
			<div>
				<h1>{labels[locale].REGISTER_HEADER}</h1>
				<div>{getRegisters()}</div>
			</div>
		</>
	);
};

export default RegisterContainer;
