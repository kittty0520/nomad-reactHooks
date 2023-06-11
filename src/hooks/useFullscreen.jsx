import { useRef } from 'react';

const useFullscreen = (callback) => {
	const element = useRef();
	const runCallback = (isFull) => {
		if (callback && typeof callback === 'function') {
			callback(isFull);
		}
	};
	const triggerFull = () => {
		if (element.current) {
			if (element.current.requestFullscreen) {
				element.current.requestFullscreen();
			} else if (element.current.webkitRequestFullscreen) {
				/* Safari */
				element.current.webkitRequestFullscreen();
			} else if (element.current.msRequestFullscreen) {
				/* IE11 */
				element.current.msRequestFullscreen();
			}
		}
		runCallback(true);
	};
	const exitFull = () => {
		const checkFullscreen = document.fullscreenElement;
		if (checkFullscreen !== null) {
			if (document.exitFullscreen) {
				document.exitFullscreen();
			} else if (document.webkitExitFullscreen) {
				/* Safari */
				document.webkitExitFullscreen();
			} else if (document.msExitFullscreen) {
				/* IE11 */
				document.msExitFullscreen();
			}
			runCallback(false);
		} else {
			console.log('not fullscreen');
		}
	};
	return { element, triggerFull, exitFull };
};

export default useFullscreen;
