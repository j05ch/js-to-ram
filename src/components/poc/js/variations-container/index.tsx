import * as React from 'react';
import { useEffect, useState } from 'react';
import AddVariation from '../add-variation';
import VariationsSelector from '../variations-selector';
import { Components, ComponentsKey } from '../../../../actions/components';
import { Groups } from '../../../../actions/groups';
import LetArithmeticVarVar from '../variations/let-arithmetic-var-var';
import Variation from '../variation';

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
				let selected: JSX.Element;
				switch (v) {
					case Components.VARIATIONS_SELECTOR: {
						selected = (
							<VariationsSelector
								index={index}
								selectVariation={selectVariation}
								group={Groups.A}
							/>
						);
						break;
					}
					case Components.LET_ARITHMETIC_VAR_VAR: {
						selected = (
							<LetArithmeticVarVar
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
					<Variation
						key={index + v}
						index={index}
						removeVariation={removeVariation}
					>
						{selected}
					</Variation>
				);
			})
		);
	}, [variations]);

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
		console.log('Select Variation', tempArr);
		setVariations(tempArr);
	};

	const addVariationsSelector = (index: number) => {
		console.log('INDEX', index);
		console.log('VARIATIONS', variations);
		const tempArr = [...variations];
		tempArr.splice(index + 1, 0, Components.VARIATIONS_SELECTOR);
		console.log('TEMP', tempArr);
		setVariations(tempArr);
	};

	const removeVariation = (index: number) => {
		let tempArr = [...variations];
		tempArr.splice(index, 1);
		tempArr = cleanUpAddVariation(tempArr);
		setVariations(tempArr);
	};

	return (
		<>
			<div>{components}</div>
		</>
	);
};

export default VariationsContainer;