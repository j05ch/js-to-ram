import * as React from 'react';

interface Props {
	data: any;
}

/**
 * Component for on screen debugging. Just pass any prop, state, etc. as data
 * @param data
 * @returns {JSX.Element}
 */
const Debug: React.FC<Props> = ({ data }: Props) => {
	return <pre>{JSON.stringify(data, null, 2)}</pre>;
};

export default Debug;
