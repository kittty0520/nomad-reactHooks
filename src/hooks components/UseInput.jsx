import { useState } from 'react';

const useInput = (initialValue, validator) => {
	const [value, setValue] = useState(initialValue);
	const onChange = (event) => {
		const {
			target: { value },
		} = event;
		let willUpdate = true;
		if (typeof validator === 'function') {
			willUpdate = validator(value);
		}
		if (willUpdate) {
			setValue(value);
		}
	};
	return { value, onChange };
};

export default function UseInput() {
	const maxLen = (value) => value.length <= 10; //검증기준을 가지는 함수
	const name = useInput('Mr.', maxLen);
	return (
		<div>
			<h1>Hello Hooks</h1>
			<input placeholder='Name' value={name.value} onChange={name.onChange} />
		</div>
	);
}
