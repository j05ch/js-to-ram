import * as React from 'react';
import { useEffect, useState } from 'react';
import { variations } from '../../../utils/variations';
import { Groups } from '../../../actions/groups';
import { Components, ComponentsKey } from '../../../actions/components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

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
		const selected = variations.filter((v) => v.group.includes(group));
		setOptions(selected.map((s) => s.variation));
	}, [group]);

	return (
		<>
			<div className="flex items-center">
				<select
					onFocus={(e) => {
						setSelected(e.target.value as ComponentsKey);
					}}
					onChange={(e) => {
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
					<div
						className="cursor-pointer"
						onClick={() => selectVariation(selected, index)}
					>
						<FontAwesomeIcon color={'green'} icon={faCheckCircle} />
					</div>
				)}
			</div>
		</>
	);
};

export default VariationsSelector;
