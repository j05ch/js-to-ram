import React from 'react';
import TestComponent from '../test-component';

const TestContainer = () => {
	const arr = [
		{
			section: 1,
			color: 'red',
			priority: 1,
			value: 'Hallo ich bin 1',
		},
		{
			section: 2,
			color: 'blue',
			priority: 3,
			value: 'Hallo ich bin 2',
		},
	];

	return (
		<div>
			{arr.map((o) => {
				if (o.section === 1) {
					return (
						<TestComponent
							color={o.color}
							value={o.value}
							priority={o.priority}
						/>
					);
				} else if (o.section === 2) {
					return (
						<TestComponent
							color={o.color}
							value={o.value}
							priority={o.priority}
						/>
					);
				} else return React.Fragment;
			})}
		</div>
	);
};

export default TestContainer;
