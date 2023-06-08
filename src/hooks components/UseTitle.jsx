import { useEffect, useState } from 'react';

const useTitle = (initialTitle) => {
	const [title, setTitle] = useState(initialTitle);
	const updateTitle = () => {
		const htmlTitle = document.querySelector('title');
		htmlTitle.innerText = title;
	};
	useEffect(updateTitle, [title]);

	return setTitle;
};

export default function UseTitle() {
	const titleUpdator = useTitle('Loading...');
	setTimeout(() => titleUpdator('home'), 3000);
	return (
		<div>
			<h1>Hello Hooks</h1>
		</div>
	);
}
