import useAxios from '../hooks/UseAxios';

export default function UseAxios() {
	const { loading, error, data, refetch } = useAxios({
		url: 'https://yts.mx/api/v2/list_movies.json',
	});
	return (
		<div className='App'>
			<h1>Hello Hooks</h1>
			<p> {loading && 'loading...'}</p>
			<p> {data && data.status}</p>
			<button onClick={refetch}>refetch</button>
		</div>
	);
}
