import { useEffect } from 'react';

const useBeforeLeave = (onBefore) => {
	const handle = (event) => {
		const { clientY } = event;
		//clientY : 마우스 위치의 y값
		//마우스가 화면 위로 벗어나면 ClientY값이 0보다 작아지는 것을 이용
		if (clientY <= 0) {
			onBefore();
		}
	};
	const showMouseLeave = () => {
		document.addEventListener('mouseleave', handle);
		return () => document.removeEventListener('mouseleave', handle);
	};
	useEffect(showMouseLeave);
	if (typeof onBefore !== 'function') return;
};

export default useBeforeLeave;
