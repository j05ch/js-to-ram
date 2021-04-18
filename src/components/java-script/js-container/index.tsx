import * as React from 'react';
import { useEffect, useRef, useState } from 'react';
import VariationsContainer from '../variations-container';
import JSInputParser from '../js-input-parser';
import MachineContainer from '../../random-access-machine/machine-container';
import Button from '../../common/button';
import { downloadProgramJson } from '../../../utils/programUtils';
import { labels } from '../../../models/labels';

interface Props {}

const JsContainer: React.FC<Props> = () => {
	const [show, setShow] = useState({
		jsInput: true,
		jsOutput: false,
		showBtn: true,
		ram: false,
	});
	const [state, setState] = useState({});
	const [programArray, setProgramArray] = useState<string[][]>([[]]);
	const [isRamRunning, setIsRamRunning] = useState(false);
	const [isJsRunning, setIsJsRunning] = useState(false);
	const [pc, setPc] = useState<number>();
	const [breakPc, setBreakPc] = useState<number>();
	const inputFile = useRef<HTMLInputElement>(null);

	const buildProgramArray = (arr: Array<string>) => {
		const program = arr.map((s) => s.split(' '));
		setProgramArray(program);
		setShow({ jsInput: false, jsOutput: true, showBtn: false, ram: true });
	};

	const loadJs = () => {
		setShow({
			jsInput: false,
			jsOutput: true,
			showBtn: false,
			ram: true,
		});
	};

	useEffect(() => {
		console.log('PC and Break', pc, breakPc);
	}, [pc, breakPc]);

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
					const json = JSON.parse(e.target.result);
					setState(json);
				}
			};

			reader.readAsText(file);
		}
	}

	return (
		<>
			{show.jsInput && (
				<div>
					<VariationsContainer state={state} setState={setState} />
					<div className="flex justify-end pt-2 pr-2">
						<Button
							onClick={() => downloadProgramJson(state)}
							label={'Speichern'}
						/>
						<input
							type="file"
							id="file"
							onChange={(e) => fileChange(e)}
							ref={inputFile}
							style={{ display: 'none' }}
						/>
						<div className="pl-2">
							<Button onClick={onClickOpen} label="Öffnen" />
						</div>
					</div>
				</div>
			)}
			{show.ram && programArray.length > 0 && (
				<MachineContainer
					programArray={programArray}
					inputArray={[]}
					isRamRunning={isRamRunning}
					setIsRamRunning={setIsRamRunning}
					setIsJsRunning={setIsJsRunning}
					extended
					pc={pc || 0}
					breakPc={breakPc || -1}
				/>
			)}
			{show.jsOutput && (
				<JSInputParser
					inputModel={state}
					buildRamProgram={buildProgramArray}
					isJsRunning={isJsRunning}
					setIsJsRunning={setIsJsRunning}
					setIsRamRunning={setIsRamRunning}
					setPc={setPc}
					setBreakPc={setBreakPc}
				/>
			)}
			{show.showBtn && (
				<div className="flex justify-center p-2">
					<Button onClick={loadJs} label={'LOAD'} primary />
				</div>
			)}
		</>
	);
};

export default JsContainer;
