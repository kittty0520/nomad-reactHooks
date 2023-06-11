import { useState } from 'react';
import useInput from '../hooks/UseInput';

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
