import * as React from 'react';
import { labels } from '../../../models/labels';
import InputField from '../../common/input-field';
import { useEffect, useRef, useState } from 'react';
import {
	downloadProgramFile,
	programStringToArray,
} from '../../../utils/programUtils';
import MachineContainer from '../machine-container';
import InputFieldContainer from '../input-field-container';
import Button from '../../common/button';
import InfoPopup from '../../common/info-popup/info-popup';
import { ramAppInfo } from '../../../models/info-texts';

interface Props {}

const MachineAppContainer: React.FC<Props> = () => {
	const [programString, setProgramString] = useState('');
	const [programArray, setProgramArray] = useState<string[][]>([]);
	const inputFile = useRef<HTMLInputElement>(null);
	const [locale, setLocale] = useState('DE');
	const [inputString, setInputString] = useState<string>('');
	const [inputArray, setInputArray] = useState<string[]>([]);
	const [isRamRunning, setIsRamRunning] = useState(false);
	const [isJsRunning, setIsJsRunning] = useState(false);
	const [show, setShow] = useState(true);

	useEffect(() => setLocale('DE'), []);

	function loadRAM() {
		setInputArray(inputString.split('\n'));
		setShow(false);
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
		<>
			{show && (
				<div className="flex flex-col justify-center items-center mt-4">
					<div className="flex mb-2">
						<h1 className="text-2xl p-4">
							{labels[locale].RAM_HEADER}
						</h1>
						<InfoPopup
							header={ramAppInfo[locale].header}
							content={ramAppInfo[locale].content}
						/>
					</div>
					<input
						type="file"
						id="file"
						onChange={(e) => fileChange(e)}
						ref={inputFile}
						style={{ display: 'none' }}
					/>
					<InputField
						setState={setProgramString}
						value={programString}
						placeholder={labels[locale].PROGRAM_HEADER}
					/>
					<div className="p-2 mb-4 flex justify-evenly items-center">
						<div className="pr-2">
							<Button
								onClick={() =>
									downloadProgramFile(programString)
								}
								label={labels[locale].SAVE_BTN}
								secondary
							/>
						</div>
						<div className="pl-2">
							<Button
								onClick={onClickOpen}
								label={labels[locale].OPEN_BTN}
							/>
						</div>
					</div>
					<InputFieldContainer
						setState={setInputString}
						state={inputString}
						placeholder={labels[locale].INPUT_CONTAINER_HEADER}
					/>
					<div className="p-2">
						<Button
							onClick={loadRAM}
							label={labels[locale].LOAD_BTN}
							primary
						/>
					</div>
				</div>
			)}{' '}
			{programArray.length > 0 && (
				<MachineContainer
					programArray={programArray}
					inputArray={inputArray}
					isRamRunning={isRamRunning}
					setIsRamRunning={setIsRamRunning}
					setIsJsRunning={setIsJsRunning}
					pc={0}
					breakPc={-1}
				/>
			)}
		</>
	);
};

export default MachineAppContainer;
