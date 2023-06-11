import { useState } from 'react';

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

export default useTabs;
