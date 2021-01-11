import * as React from 'react';
import { labels } from '../../models/labels';
import InputField from '../input-field';
import { useEffect, useRef, useState } from 'react';
import {
	downloadProgramFile,
	programStringToArray,
} from '../../utils/programUtils';
import MachineContainer from '../machine-container';
import InputContainer from '../input-container';

interface Props {}

const AppContainer: React.FC<Props> = () => {
	const [programString, setProgramString] = useState('');
	const [programArray, setProgramArray] = useState<string[][]>([]);
	const inputFile = useRef<HTMLInputElement>(null);
	const [locale, setLocale] = useState('DE');
	const [inputString, setInputString] = useState<string>('');

	useEffect(() => setLocale('DE'), []);

	function loadProgram() {
		setProgramArray(programStringToArray(programString));
	}

	async function onClickOpen() {
		if (inputFile.current) {
			await inputFile.current.click();
		}
	}

	function fileChange(e: React.ChangeEvent<HTMLInputElement>) {
		if (e.target && e.target.files) {
			const file = e.target.files[0];
			const reader = new FileReader();
			reader.onload = function (e) {
				if (
					e.target &&
					e.target.result &&
					typeof e.target.result == 'string'
				) {
					setProgramString(e.target.result);
				}
			};

			reader.readAsText(file);
		}
	}

	return (
		<div className="dark:bg-blue-900">
			<h1 className="dark:text-blue-50">{labels[locale].RAM_HEADER}</h1>
			<input
				type="file"
				id="file"
				onChange={(e) => fileChange(e)}
				ref={inputFile}
				style={{ display: 'none' }}
			/>
			<button
				className="dark:text-blue-50 border-2"
				onClick={onClickOpen}
			>
				{labels[locale].OPEN_BTN}
			</button>
			<InputField setState={setProgramString} value={programString} />
			<button
				className="dark:text-blue-50 border-2"
				onClick={() => downloadProgramFile(programString)}
			>
				{labels[locale].SAVE_BTN}
			</button>
			<InputContainer setState={setInputString} state={inputString} />
			<button
				className="dark:text-blue-50 border-2"
				onClick={loadProgram}
			>
				{labels[locale].LOAD_BTN}
			</button>
			{programArray.length > 0 && (
				<MachineContainer programArray={programArray} />
			)}
		</div>
	);
};

export default AppContainer;
