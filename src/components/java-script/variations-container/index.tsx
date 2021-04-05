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
import For from '../variations/for';

interface Props {
	state: any;
	setState: Dispatch<React.SetStateAction<{}>>;
}

const VariationsContainer: React.FC<Props> = ({ state, setState }) => {
	const [variations, setVariations] = useState<ComponentsKey[]>([
		Components.ADD_VARIATION,
	]);
	const [components, setComponents] = useState<JSX.Element[]>([]);
	// const [state, setState] = useState({});

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
								state={state}
								setState={setState}
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
					case Components.FOR: {
						variation = (
							<For
								index={index}
								state={state}
								setState={setState}
							/>
						);
						break;
					}
					default:
						return (
							<AddVariation
								key={index + v}
								index={index}
								handleClick={addVariationsSelector}
							/>
						);
				}
				return (
					<VariationWrapper
						key={index + v}
						index={index}
						removeVariation={removeVariation}
					>
						{variation}
					</VariationWrapper>
				);
			})
		);
	}, [variations, state]);

	useEffect(() => {
		console.log('STATE', state);
	}, [state]);

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
					i > 2 && i != index
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
			<div className="bg-red-200">{components}</div>
		</>
	);
};

export default VariationsContainer;