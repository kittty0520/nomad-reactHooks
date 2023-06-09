import { useEffect, useRef } from 'react';

const useFadeIn = (duration = 1, delay = 0) => {
	const element = useRef();
	useEffect(() => {
		if (typeof duration !== 'number' || typeof delay !== 'number') return;
		if (element.current) {
			const { current } = element;
			current.style.transition = `opacity ${duration}s ease-in ${delay}s`;
			current.style.opacity = 1;
		}
	}, [duration, delay]);
	return { ref: element, style: { opacity: 0 } };
};

export default function UseFadeIn() {
	const fadeInH1 = useFadeIn(3, 1);
	return (
		<div className='App'>
			<h1 {...fadeInH1}>Hello Hooks</h1>
		</div>
	);
}
