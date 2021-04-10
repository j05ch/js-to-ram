import * as React from 'react';
import Button from '../common/Button';
import { useHistory } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { labels } from '../../models/labels';

const MachineSelector: React.FC = () => {
	let history = useHistory();
	const [locale, setLocale] = useState('DE');

	useEffect(() => setLocale('DE'), []);

	const handleClick = (path: string) => {
		history.push(path);
	};

	return (
		<div className="flex flex-col justify-center items-center h-screen">
			<div className="m-4">{labels[locale].CHOOSE}</div>
			<div className="m-4">
				<Button
					label={'Random Access Machine'}
					onClick={() => handleClick('/ram')}
				/>
			</div>
			<div className="m-4">
				<Button
					label={'JavaScript'}
					onClick={() => handleClick('/js')}
				/>
			</div>
		</div>
	);
};

export default MachineSelector;
