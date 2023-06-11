import useBeforeLeave from '../hooks/UseBeforeLeave';

export default function UseBeforeLeave() {
	const begForLife = () => console.log("please don't leave");
	useBeforeLeave(begForLife);
	return (
		<div className='App'>
			<h1>Hello Hooks</h1>
		</div>
	);
}
