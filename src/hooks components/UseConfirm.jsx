const useConfirm = (message, onConfirm, onCancel) => {
	if (!onConfirm || typeof onConfirm !== 'function') return;
	if (onCancel && typeof onCancel !== 'function') return;
	const confirmAction = () => {
		if (window.confirm(message)) {
			onConfirm();
		} else {
			onCancel();
		}
	};
	return confirmAction;
};

export default function UseConfirm() {
	const deleteWorld = () => console.log('Deleteing the world...');
	const absort = () => console.log('Absorted!');
	const confirmDelete = useConfirm('Are you sure', deleteWorld, absort);
	return (
		<div>
			<h1>Hello Hooks</h1>
			<button onClick={confirmDelete}>Delete</button>
		</div>
	);
}
