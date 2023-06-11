import useTabs from '../hooks/UseTabs';

const content = [
	{ tab: 'Section 1', content: "I'm the content of the Section 1" },
	{
		tab: 'Section 2',
		content: "I'm the content of the Section 2",
	},
];

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
