import useNotification from '../hooks/UseNotification';

export default function UseNotification() {
	const triggerNotif = useNotification('Can you confirm it?', {
		body: 'This is optional',
	});
	return (
		<div>
			<h1>Hello Hooks</h1>
			<button onClick={triggerNotif}>Click</button>
		</div>
	);
}
