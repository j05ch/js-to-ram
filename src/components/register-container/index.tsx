import * as React from 'react';
import { labels } from '../../models/labels';
import { useEffect, useState } from 'react';
import Register from '../register';

interface Props {
	register: number[];
	programCounter: number;
}

const RegisterContainer: React.FC<Props> = ({ register, programCounter }) => {
	const [locale, setLocale] = useState('DE');

	useEffect(() => setLocale('DE'), []);

	function getRegisters() {
		return register.map((r, index) => (
			<Register
				register={r}
				index={index}
				programCounter={programCounter}
				key={index}
			/>
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
