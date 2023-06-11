import useFadeIn from '../hooks/UseFadeIn';

export default function UseFadeIn() {
	const fadeInH1 = useFadeIn(3, 1);
	return (
		<div className='App'>
			<h1 {...fadeInH1}>Hello Hooks</h1>
		</div>
	);
}
