import * as React from 'react';
import { useEffect, useState } from 'react';
import { Variation, variations } from '../variations';
import { Groups } from '../../../../actions/groups';
import { Components, ComponentsKey } from '../../../../actions/components';

interface Props {
	group: Groups;
	selectVariation: (s: ComponentsKey) => void;
}

const VariationsSelector: React.FC<Props> = ({ group, selectVariation }) => {
	const [options, setOptions] = useState<Variation[]>();
	const [selected, setSelected] = useState<ComponentsKey>();

	useEffect(() => {
		setOptions(
			variations.map((v) => {
				if (v.group === group) {
					return v;
				} else
					return {
						variation: Components.NONE,
						variationNo: 0,
						group: Groups.A,
					};
			})
		);
	}, [group]);

	return (
		<>
			<div>
				<select
					onChange={(e) =>
						setSelected(e.target.value as ComponentsKey)
					}
				>
					{options &&
						options.map((o) => (
							<option key={o.variation} value={o.variation}>
								{o.variation}
							</option>
						))}
				</select>
				<button
					onClick={() => selectVariation(selected ? selected : '')}
				>
					+
				</button>
			</div>
		</>
	);
};

export default VariationsSelector;
