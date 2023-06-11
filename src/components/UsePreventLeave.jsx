import usePreventLeave from '../hooks/UsePreventLeave';

export default function UsePreventLeave() {
	const { enablePrevent, disablePrevent } = usePreventLeave();
	return (
		<div>
			<h1>Hello Hooks</h1>
			<button onClick={enablePrevent}>Protect</button>
			<button onClick={disablePrevent}>unProtect</button>
		</div>
	);
}
