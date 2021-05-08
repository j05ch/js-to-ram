import * as React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

interface Props {
	header: string;
	content: string;
}

/**
 * Info component that shows a modal on click.
 * @param header
 * @param content
 * @returns {JSX.Element}
 */
const InfoPopup: React.FC<Props> = ({ header, content }) => {
	const [show, setShow] = useState(false);

	function handleShow() {
		setShow(!show);
	}

	const display = show ? 'block' : 'hidden';

	return (
		<>
			<div className="cursor-pointer" onClick={handleShow}>
				<FontAwesomeIcon icon={faInfoCircle} />
			</div>
			<div
				className={`${display} absolute top-0 left-0 z-index-40 w-screen h-screen bg-blue-700 opacity-80`}
			/>
			<div
				className={`${display} absolute top-1/4 right-1/4 z-index-50 w-96 rounded p-4 bg-white`}
			>
				<div className="flex justify-between items-baseline pb-2">
					<div className="text-base">{header}</div>
					<div
						onClick={handleShow}
						className="text-xl hover:text-gray-500 cursor-pointer"
					>
						x
					</div>
				</div>
				<div className="text-xs leading-5">{content}</div>
			</div>
		</>
	);
};

export default InfoPopup;
