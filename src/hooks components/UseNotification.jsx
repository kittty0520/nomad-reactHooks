const useNotification = (title, options) => {
	if (!('Notification' in window)) {
		return;
	}

	const fireNotif = () => {
		if (Notification.permission !== 'granted') {
			Notification.requestPermission().then((permission) => {
				if (permission === 'granted') {
					new Notification(title, options);
				} else {
					return;
				}
			});
		}
	};
	return fireNotif;
};

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
