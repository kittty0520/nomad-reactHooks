import useClick from '../hooks/UseClick';

export default function UseClick() {
	const sayHello = () => console.log('say hello');
	const title = useClick(sayHello);
	return (
		<div className='App'>
			<h1 ref={title}>Hello Hooks</h1>
		</div>
	);
}
