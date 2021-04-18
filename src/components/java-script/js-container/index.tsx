import * as React from 'react';
import { useEffect, useState } from 'react';
import VariationsContainer from '../variations-container';
import JSInputParser from '../js-input-parser';
import MachineContainer from '../../random-access-machine/machine-container';
import Button from '../../common/Button';

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

	return (
		<>
			{show.jsInput && (
				<VariationsContainer state={state} setState={setState} />
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
