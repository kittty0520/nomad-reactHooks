import useTitle from '../hooks/UseTitle';

export default function UseTitle() {
	const titleUpdator = useTitle('Loading...');
	setTimeout(() => titleUpdator('home'), 3000);
	return (
		<div>
			<h1>Hello Hooks</h1>
		</div>
	);
}
