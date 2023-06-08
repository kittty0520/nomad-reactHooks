import { useState } from 'react';

const content = [
	{ tab: 'Section 1', content: "I'm the content of the Section 1" },
	{
		tab: 'Section 2',
		content: "I'm the content of the Section 2",
	},
];

const useTabs = (initialTab, allTabs) => {
	const [currentIndex, setCurrentIndex] = useState(initialTab);
	if (!allTabs || !Array.isArray(allTabs)) return;

	const changeItem = (currentIndex) => setCurrentIndex(currentIndex);
	const currentItem = allTabs[currentIndex];
	return { currentItem, changeItem };

	// return {
	//   currentItem: allTabs[currentIndex],
	//   changeItem: setCurrentIndex
	// };
};

export default function UseTabs() {
	const { currentItem, changeItem } = useTabs(0, content);
	// console.log(tabs);
	return (
		<div>
			<h1>Hello Hooks</h1>
			{content.map((section, index) => (
				<button onClick={() => changeItem(index)}>{section.tab}</button>
			))}
			<div>{currentItem.content}</div>
		</div>
	);
}
