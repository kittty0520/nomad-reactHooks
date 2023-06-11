import defaultAxios from 'axios';
import { useEffect, useState } from 'react';

const useAxios = (opts, axiosInstance = defaultAxios) => {
	const [state, setState] = useState({
		loading: true,
		error: null,
		data: null,
	});
	const [trigger, setTrigger] = useState(0);
	useEffect(() => {
		axiosInstance(opts)
			.then((data) => {
				setState({
					...state,
					loading: false,
					data,
				});
			})
			.catch((error) => {
				setState({ ...state, loading: false, error });
			});
	}, [trigger]);
	if (!opts.url) {
		return;
	}
	const refetch = () => {
		setState({
			...state,
			loading: true,
		});
		setTrigger(Date.now());
	};

	return { ...state, refetch };
};

export default useAxios;

// 컴포넌트 활용예시
// export default function App() {
//     const { loading, error, data, refetch } = useAxios({
//       url: "https://yts.mx/api/v2/list_movies.json"
//     });
//     return (
//       <div className="App">
//         <h1>Hello Hooks</h1>
//         <p> {loading && "loading..."}</p>
//         <p> {data && data.status}</p>
//         <button onClick={refetch}>refetch</button>
//       </div>
//     );
//   }
