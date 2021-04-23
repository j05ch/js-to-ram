import * as React from 'react';
import { useEffect, useRef } from 'react';

/**
 * Hook for a declarative setInterval
 * @param {React.EffectCallback} callback
 * @param {number | null} delay
 */
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
