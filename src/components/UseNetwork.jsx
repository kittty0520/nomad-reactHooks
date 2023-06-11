import { useEffect, useState } from 'react';
import useNetwork from '../hooks/UseNetwork';

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
