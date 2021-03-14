import * as React from 'react';
import { useEffect, useState } from 'react';
import AddVariation from '../add-variation';
import VariationsSelector from '../variations-selector';
import { Components, ComponentsKey } from '../../../../actions/components';
import { Groups } from '../../../../actions/groups';

interface Props {}

const VariationsContainer: React.FC<Props> = () => {
	const [variations, setVariations] = useState<ComponentsKey[]>([
		Components.ADD_VARIATION,
	]);
	const [components, setComponents] = useState<JSX.Element[]>([]);

	const selectVariation = (s: ComponentsKey) => {
		const component = Components[s as keyof typeof Components];
		setVariations([...variations, component]);
	};

	useEffect(() => {
		setComponents(
			variations.map((v) => {
				if (v === Components.VARIATIONS_SELECTOR) {
					return (
						<VariationsSelector
							selectVariation={selectVariation}
							group={Groups.A}
						/>
					);
				}
				return (
					<AddVariation
						variations={variations}
						addVariation={setVariations}
					/>
				);
			})
		);
	}, [variations]);

	return (
		<>
			<div>{components}</div>
		</>
	);
};

export default VariationsContainer;
