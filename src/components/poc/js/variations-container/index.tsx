import * as React from 'react';
import { useEffect, useState } from 'react';
import AddVariation from '../add-variation';
import VariationsSelector from '../variations-selector';
import { Components, ComponentsKey } from '../../../../actions/components';
import { Groups } from '../../../../actions/groups';
import LetArithmeticVarVar from '../variations/let-arithmetic-var-var';
import VariationWrapper from '../variation-wrapper';
import LetArithmeticNumNum from '../variations/let-arithmetic-num-num';

interface Props {}

const VariationsContainer: React.FC<Props> = () => {
	const [variations, setVariations] = useState<ComponentsKey[]>([
		Components.ADD_VARIATION,
	]);
	const [components, setComponents] = useState<JSX.Element[]>([]);
	const [state, setState] = useState({});

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
		console.log('variationsLength', variationsLength);
		console.log('state', state);
		let tempState: any = { ...state };
		let calculatedState = {};
		for (let i = index + 1; i < variationsLength; i = i + 2) {
			console.log('tempstate at', i, tempState);
			if (tempState[i]) {
				const temp = tempState[i];
				delete tempState[i];
				console.log('tempstate after delete at', i, tempState);
				calculatedState = { ...calculatedState, [i + 2]: { ...temp } };
				console.log('calculatedstate at', i, calculatedState);
			}
		}
		calculatedState = { ...tempState, ...calculatedState };
		console.log('calculatedstate', calculatedState);
		setState(calculatedState);
	};

	const cleanUpStateOnRemove = (index: number, variationsLength: number) => {
		console.log('variationsLength', variationsLength);
		console.log('state', state);
		let tempState: any = { ...state };
		let calculatedState = {};
		for (let i = index; i < variationsLength; i = i + 2) {
			console.log('tempstate at', i, tempState);
			if (tempState[i]) {
				const temp = tempState[i];
				delete tempState[i];
				console.log('tempstate after delete at', i, tempState);
				calculatedState =
					i > 2 && i != index
						? { ...calculatedState, [i - 2]: { ...temp } }
						: { ...calculatedState };
				console.log('calculatedstate at', i, calculatedState);
			}
		}
		calculatedState = { ...tempState, ...calculatedState };
		console.log('calculatedstate', calculatedState);
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
			<div>{components}</div>
		</>
	);
};

export default VariationsContainer;
