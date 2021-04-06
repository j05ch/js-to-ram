import * as React from 'react';
import { useState } from 'react';
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

	const buildProgramArray = (arr: Array<string>) => {
		const program = arr.map((s) => s.split(' '));
		console.log('PROGRAM', program);
		setProgramArray(program);
		setShow({ jsInput: false, jsOutput: false, showBtn: false, ram: true });
	};

	const loadJs = () => {
		setShow({
			jsInput: false,
			jsOutput: true,
			showBtn: false,
			ram: false,
		});
	};

	return (
		<>
			{show.jsInput && (
				<VariationsContainer state={state} setState={setState} />
			)}
			{show.jsOutput && (
				<JSInputParser
					inputModel={state}
					buildProgram={buildProgramArray}
				/>
			)}
			{show.showBtn && (
				<div className="flex justify-center p-2">
					<Button onClick={loadJs} label={'LOAD'} primary />
				</div>
			)}
			{show.ram && programArray.length > 0 && (
				<MachineContainer programArray={programArray} inputArray={[]} />
			)}
		</>
	);
};

export default JsContainer;
