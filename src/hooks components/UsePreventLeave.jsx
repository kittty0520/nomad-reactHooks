const usePreventLeave = () => {
	const listener = (e) => {
		e.preventDefault();
		e.returnValue = '';
	};
	const enablePrevent = () => {
		window.addEventListener('beforeunload', listener);
	};
	const disablePrevent = () => {
		window.removeEventListener('beforeunload', listener);
	};
	return { enablePrevent, disablePrevent };
};

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
