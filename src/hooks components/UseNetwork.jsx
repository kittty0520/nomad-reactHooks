import { useEffect, useState } from 'react';

const useNetwork = (onChange) => {
	const [status, setStatus] = useState(navigator.onLine);
	const handleChange = () => {
		if (typeof onChange === 'function') {
			onChange(navigator.onLine);
		}
		setStatus(navigator.onLine);
	};
	useEffect(() => {
		window.addEventListener('online', handleChange);
		window.addEventListener('offline', handleChange);
		return () => {
			window.removeEventListener('online', handleChange);
			window.removeEventListener('offline', handleChange);
		};
	});
	return status;
};

export default function UseNetwork() {
	const handleNetworkChange = (online) => {
		console.log(online ? 'we just went online' : 'we are offline');
	};
	const online = useNetwork(handleNetworkChange);
	return (
		<div className='App'>
			<h1>Hello Hooks</h1>
			<p>{online ? 'Online' : 'Offline'}</p>
		</div>
	);
}
