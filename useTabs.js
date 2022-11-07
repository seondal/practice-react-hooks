export const useTabs = (initialTab, allTabs) => {
  if (!allTabs || !Array.isArray(allTabs)) {
    return;
  }
  const [curIndex, setCurIndex] = useState(initialTab);
  return {
    curItem: allTabs[curIndex],
    changeItem: setCurIndex,
  };
};
