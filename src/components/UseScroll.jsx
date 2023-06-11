import useScroll from '../hooks/UseScroll';

export default function UseScroll() {
	const { y } = useScroll();
	return (
		<div style={{ height: '1000vh' }}>
			<h1 style={{ position: 'fixed', color: y > 100 ? 'red' : 'blue' }}>
				Hello Hooks
			</h1>
		</div>
	);
}
