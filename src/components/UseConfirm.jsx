import useConfirm from '../hooks/UseConfirm';

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
