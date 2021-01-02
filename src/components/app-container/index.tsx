import * as React from 'react';
import { labels } from '../../models/labels';
import ProgramInput from '../program-input';
import { useRef, useState } from 'react';
import {
	downloadProgramFile,
	programStringToArray,
} from '../../utils/programUtils';
import MachineContainer from '../machine-container';

interface Props {}

const AppContainer: React.FC<Props> = () => {
	const [programString, setProgramString] = useState('');
	const [programArray, setProgramArray] = useState<string[][]>([]);
	const inputFile = useRef<HTMLInputElement>(null);

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
		<div className="dark:bg-black">
			<h1 className="dark:text-blue-50">{labels.DE.RAM_HEADER}</h1>
			<input
				type="file"
				id="file"
				onChange={(e) => fileChange(e)}
				ref={inputFile}
				style={{ display: 'none' }}
			/>
			<button className="dark:text-blue-50" onClick={onClickOpen}>
				Button OPEN
			</button>
			<ProgramInput setState={setProgramString} value={programString} />
			<button
				className="dark:text-blue-50"
				onClick={() => downloadProgramFile(programString)}
			>
				Button SAVE
			</button>
			<button className="dark:text-blue-50" onClick={loadProgram}>
				Button LOAD
			</button>
			<MachineContainer programArray={programArray} />
		</div>
	);
};

export default AppContainer;
