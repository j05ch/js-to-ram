import * as React from 'react';
import { useEffect, useState } from 'react';
import { variations } from '../variations';
import { Groups } from '../../../../actions/groups';
import { Components, ComponentsKey } from '../../../../actions/components';

interface Props {
	index: number;
	group: Groups;
	selectVariation: (variation: ComponentsKey, index: number) => void;
}

const VariationsSelector: React.FC<Props> = ({
	index,
	group,
	selectVariation,
}) => {
	const [options, setOptions] = useState<ComponentsKey[]>();
	const [selected, setSelected] = useState<ComponentsKey>();

	useEffect(() => {
		setOptions(
			variations.map((v) => {
				if (v.group === group) return v.variation;
				else return Components.NONE;
			})
		);
	}, [group]);

	return (
		<>
			<div>
				<select
					onFocus={(e) => {
						console.log('E', e, e.target.value);
						setSelected(e.target.value as ComponentsKey);
					}}
					onChange={(e) => {
						console.log('E', e, e.target.value);
						setSelected(e.target.value as ComponentsKey);
					}}
				>
					{options &&
						options.map((o) => (
							<option key={o} value={o}>
								{o}
							</option>
						))}
				</select>
				{selected && (
					<button onClick={() => selectVariation(selected, index)}>
						+
					</button>
				)}
			</div>
		</>
	);
};

export default VariationsSelector;
