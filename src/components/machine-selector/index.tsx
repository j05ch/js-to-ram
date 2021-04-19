import * as React from 'react';
import Button from '../common/button';
import { useHistory } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { labels } from '../../models/labels';
import InfoPopup from '../common/info-popup/info-popup';
import { machineSelectorInfo } from '../../models/info-texts';

const MachineSelector: React.FC = () => {
	let history = useHistory();
	const [locale, setLocale] = useState('DE');

	useEffect(() => setLocale('DE'), []);

	const handleClick = (path: string) => {
		history.push(path);
	};

	return (
		<div className="flex flex-col items-center h-screen mt-4">
			<div className="flex">
				<div className="m-4">{labels[locale].CHOOSE}</div>
				<InfoPopup
					header={machineSelectorInfo[locale].header}
					content={machineSelectorInfo[locale].content}
				/>
			</div>
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
