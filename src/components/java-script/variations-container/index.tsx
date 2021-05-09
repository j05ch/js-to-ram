import * as React from 'react';
import { Dispatch, useEffect, useState } from 'react';
import AddVariation from '../add-variation';
import VariationsSelector from '../variations-selector';
import { Components, ComponentsKey } from '../../../actions/components';
import { Groups } from '../../../actions/groups';
import LetArithmeticVarVar from '../variations/let-arithmetic-var-var';
import VariationWrapper from '../variation-wrapper';
import LetArithmeticNumNum from '../variations/let-arithmetic-num-num';
import If from '../variations/if';
import Let from '../variations/let';
import LetVar from '../variations/let-var';
import VarVar from '../variations/var-var';
import LetArithmeticVarNum from '../variations/let-arithmetic-var-num';
import LetArithmeticNumVar from '../variations/let-arithmetic-num-var';
import VarNum from '../variations/var-num';
import ConsoleLog from '../variations/console-log';
import Else from '../variations/else';
import While from '../variations/while';

interface Props {
	state: any;
	setState: Dispatch<React.SetStateAction<{}>>;
}

const VariationsContainer: React.FC<Props> = ({ state, setState }) => {
	const [variations, setVariations] = useState<ComponentsKey[]>([
		Components.ADD_VARIATION,
	]);
	const [components, setComponents] = useState<JSX.Element[]>([]);

	useEffect(() => {
		setComponents(
			variations.map((v, index) => {
				let variation: JSX.Element;
				switch (v) {
					case Components.VARIATIONS_SELECTOR: {
						variation = (
							<VariationsSelector
								index={index}
								selectVariation={selectVariation}
								group={Groups.A}
							/>
						);
						break;
					}
					case Components.LET_ARITHMETIC_VAR_VAR: {
						variation = (
							<LetArithmeticVarVar
								index={index}
								type={Components.LET_ARITHMETIC_VAR_VAR}
								state={state}
								setState={setState}
								isLet
							/>
						);
						break;
					}
					case Components.LET_ARITHMETIC_NUM_NUM: {
						variation = (
							<LetArithmeticNumNum
								index={index}
								type={Components.LET_ARITHMETIC_NUM_NUM}
								state={state}
								setState={setState}
								isLet
							/>
						);
						break;
					}
					case Components.LET_ARITHMETIC_VAR_NUM: {
						variation = (
							<LetArithmeticVarNum
								index={index}
								type={Components.LET_ARITHMETIC_VAR_NUM}
								state={state}
								setState={setState}
								isLet
							/>
						);
						break;
					}
					case Components.LET_ARITHMETIC_NUM_VAR: {
						variation = (
							<LetArithmeticNumVar
								index={index}
								type={Components.LET_ARITHMETIC_NUM_VAR}
								state={state}
								setState={setState}
								isLet
							/>
						);
						break;
					}
					case Components.ARITHMETIC_VAR_VAR: {
						variation = (
							<LetArithmeticVarVar
								index={index}
								type={Components.ARITHMETIC_VAR_VAR}
								state={state}
								setState={setState}
								isLet={false}
							/>
						);
						break;
					}
					case Components.ARITHMETIC_NUM_NUM: {
						variation = (
							<LetArithmeticNumNum
								index={index}
								type={Components.ARITHMETIC_NUM_NUM}
								state={state}
								setState={setState}
								isLet={false}
							/>
						);
						break;
					}
					case Components.ARITHMETIC_VAR_NUM: {
						variation = (
							<LetArithmeticVarNum
								index={index}
								type={Components.ARITHMETIC_VAR_NUM}
								state={state}
								setState={setState}
								isLet={false}
							/>
						);
						break;
					}
					case Components.ARITHMETIC_NUM_VAR: {
						variation = (
							<LetArithmeticNumVar
								index={index}
								type={Components.ARITHMETIC_NUM_VAR}
								state={state}
								setState={setState}
								isLet={false}
							/>
						);
						break;
					}
					case Components.LET: {
						variation = (
							<Let
								index={index}
								type={Components.LET}
								state={state}
								setState={setState}
							/>
						);
						break;
					}
					case Components.LET_VAR: {
						variation = (
							<LetVar
								index={index}
								type={Components.LET_VAR}
								state={state}
								setState={setState}
							/>
						);
						break;
					}
					case Components.VAR_VAR: {
						variation = (
							<VarVar
								index={index}
								type={Components.VAR_VAR}
								state={state}
								setState={setState}
							/>
						);
						break;
					}
					case Components.VAR_NUM: {
						variation = (
							<VarNum
								index={index}
								type={Components.VAR_NUM}
								state={state}
								setState={setState}
							/>
						);
						break;
					}
					case Components.IF: {
						variation = (
							<If
								index={index}
								state={state}
								setState={setState}
								type={Components.IF}
							/>
						);
						break;
					}
					case Components.ELSE: {
						variation = (
							<Else
								index={index}
								state={state}
								setState={setState}
								type={Components.ELSE}
							/>
						);
						break;
					}
					case Components.WHILE: {
						variation = (
							<While
								index={index}
								state={state}
								setState={setState}
								type={Components.WHILE}
							/>
						);
						break;
					}
					case Components.LOG: {
						variation = (
							<ConsoleLog
								index={index}
								type={Components.LOG}
								state={state}
								setState={setState}
							/>
						);
						break;
					}
					default:
						return (
							<AddVariation
								index={index}
								handleClick={addVariationsSelector}
								key={`Variations-${String(index)}`}
							/>
						);
				}
				return (
					<VariationWrapper
						index={index}
						removeVariation={removeVariation}
						key={`Variations-${String(index)}`}
					>
						{variation}
					</VariationWrapper>
				);
			})
		);
	}, [variations, state]);

	const cleanUpAddVariation = (tempArr: ComponentsKey[]) => {
		for (let i = 0; i < tempArr.length; i++) {
			if (tempArr[i] === Components.ADD_VARIATION) {
				tempArr.splice(i, 1);
				i--;
			}
		}
		for (let i = 0; i <= tempArr.length; i = i + 2) {
			tempArr.splice(i, 0, Components.ADD_VARIATION);
		}
		return tempArr;
	};

	const selectVariation = (variation: ComponentsKey, index: number) => {
		let tempArr = [...variations];
		tempArr.splice(index, 1, variation, Components.ADD_VARIATION);
		tempArr = cleanUpAddVariation(tempArr);
		setVariations(tempArr);
	};

	const cleanUpStateOnAdd = (index: number, variationsLength: number) => {
		let tempState: any = { ...state };
		let calculatedState = {};
		for (let i = index + 1; i < variationsLength; i = i + 2) {
			if (tempState[i]) {
				const temp = tempState[i];
				delete tempState[i];
				calculatedState = { ...calculatedState, [i + 2]: { ...temp } };
			}
		}
		calculatedState = { ...tempState, ...calculatedState };
		setState(calculatedState);
	};

	const cleanUpStateOnRemove = (index: number, variationsLength: number) => {
		let tempState: any = { ...state };
		let calculatedState = {};
		for (let i = index; i < variationsLength; i = i + 2) {
			if (tempState[i]) {
				const temp = tempState[i];
				delete tempState[i];
				calculatedState =
					i > 2 && i !== index
						? { ...calculatedState, [i - 2]: { ...temp } }
						: { ...calculatedState };
			}
		}
		calculatedState = { ...tempState, ...calculatedState };
		setState(calculatedState);
	};

	const addVariationsSelector = (index: number) => {
		let tempArr = [...variations];
		tempArr.splice(index + 1, 0, Components.VARIATIONS_SELECTOR);
		tempArr = cleanUpAddVariation(tempArr);
		const variationsLength = variations.length;
		setVariations(tempArr);
		cleanUpStateOnAdd(index, variationsLength);
	};

	const removeVariation = (index: number) => {
		let tempArr = [...variations];
		tempArr.splice(index, 1);
		tempArr = cleanUpAddVariation(tempArr);
		const variationsLength = variations.length;
		cleanUpStateOnRemove(index, variationsLength);
		setVariations(tempArr);
	};

	return (
		<>
			<div className="rounded bg-red-200 m-1 pl-2 w-3/4">
				{components}
			</div>
		</>
	);
};

export default VariationsContainer;
