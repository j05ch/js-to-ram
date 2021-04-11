import * as React from 'react';
import { Dispatch, useEffect, useState } from 'react';
import AddVariation from '../add-variation';
import VariationsSelector from '../variations-selector';
import { Components, ComponentsKey } from '../../../actions/components';
import { Groups } from '../../../actions/groups';
import LetArithmeticVarVar from '../variations/let-arithmetic-var-var';
import VariationWrapper from '../variation-wrapper';
import LetArithmeticNumNum from '../variations/let-arithmetic-num-num';
import Let from '../variations/let';
import VarVar from '../variations/var-var';
import LetArithmeticVarNum from '../variations/let-arithmetic-var-num';
import LetArithmeticNumVar from '../variations/let-arithmetic-num-var';

interface Props {
	state: any;
	setState: Dispatch<React.SetStateAction<{}>>;
	index: number;
}

const VariationsChildContainer: React.FC<Props> = ({
	state,
	setState,
	index,
}) => {
	const [localState, setLocalState] = useState(
		state[index] && state[index]['children']
			? { ...state[index]['children'] }
			: {}
	);

	const [variations, setVariations] = useState<ComponentsKey[]>(
		state[index] && state[index].variations
			? [...state[index].variations]
			: [Components.ADD_VARIATION]
	);
	const [components, setComponents] = useState<JSX.Element[]>([]);

	useEffect(() => {
		setLocalState(
			state[index] && state[index]['children']
				? { ...state[index]['children'] }
				: {}
		);
	}, [index]);

	useEffect(() => {
		setState({
			...state,
			[index]: {
				...state[index],
				children: { ...localState },
				variations,
			},
		});
	}, [localState, index, variations]);

	useEffect(() => {
		setComponents(
			variations.map((v, i) => {
				let variation: JSX.Element;
				switch (v) {
					case Components.VARIATIONS_SELECTOR: {
						variation = (
							<VariationsSelector
								index={i}
								selectVariation={selectVariation}
								group={Groups.A}
							/>
						);
						break;
					}
					case Components.LET_ARITHMETIC_VAR_VAR: {
						variation = (
							<LetArithmeticVarVar
								index={i}
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
								index={i}
								type={Components.LET_ARITHMETIC_NUM_NUM}
								state={localState}
								setState={setLocalState}
								isLet
							/>
						);
						break;
					}
					case Components.LET_ARITHMETIC_VAR_NUM: {
						variation = (
							<LetArithmeticVarNum
								index={i}
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
								index={i}
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
								index={i}
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
								index={i}
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
								index={i}
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
								index={i}
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
								index={i}
								type={Components.LET}
								state={state}
								setState={setState}
							/>
						);
						break;
					}
					case Components.LET_VAR: {
						variation = (
							<Let
								index={i}
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
								index={i}
								type={Components.VAR_VAR}
								state={state}
								setState={setState}
							/>
						);
						break;
					}
					default:
						return (
							<AddVariation
								key={i + v}
								index={i}
								handleClick={addVariationsSelector}
							/>
						);
				}
				return (
					<VariationWrapper
						index={i}
						removeVariation={removeVariation}
					>
						{variation}
					</VariationWrapper>
				);
			})
		);
	}, [variations, localState]);

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
		let tempState: any = { ...localState };
		let calculatedState = {};
		for (let i = index + 1; i < variationsLength; i = i + 2) {
			if (tempState[i]) {
				const temp = tempState[i];
				delete tempState[i];
				calculatedState = { ...calculatedState, [i + 2]: { ...temp } };
			}
		}
		calculatedState = { ...tempState, ...calculatedState };
		console.log('Calculated State On Add', calculatedState);
		setLocalState(calculatedState);
	};

	const cleanUpStateOnRemove = (index: number, variationsLength: number) => {
		let tempState: any = { ...localState };
		let calculatedState = {};
		for (let i = index; i < variationsLength; i = i + 2) {
			if (tempState[i]) {
				const temp = tempState[i];
				delete tempState[i];
				calculatedState =
					i > 2 && i != index
						? { ...calculatedState, [i - 2]: { ...temp } }
						: { ...calculatedState };
			}
		}
		calculatedState = { ...tempState, ...calculatedState };
		setLocalState(calculatedState);
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
			{console.log(
				'State in child container and localState',
				state,
				localState
			)}
			<div>{components}</div>
		</>
	);
};

export default VariationsChildContainer;
