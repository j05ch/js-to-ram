import * as React from 'react';
import { useEffect, useRef } from 'react';

export function useInterval(
	callback: React.EffectCallback,
	delay: number | null
) {
	const savedCallback = useRef(callback);

	// Remember the latest callback.
	useEffect(() => {
		savedCallback.current = callback;
	}, [callback]);

	// Set up the interval.
	useEffect(() => {
		function tick() {
			savedCallback.current();
		}

		if (delay !== null) {
			let interval = setInterval(tick, delay);
			return () => clearInterval(interval);
		}
	}, [delay]);
}
