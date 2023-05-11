const getResultComparison = (differences) => {
  const result = differences.map((item) => {
    if (item.status === 'added') {
      return (` + ${item.key}: ${item.value}`);
    }
    if (item.status === 'deleted') {
      return (` - ${item.key}: ${item.value}`);
    }
    if (item.status === 'unchanged') {
      return (`   ${item.key}: ${item.value}`);
    }
    if (item.status === 'changed') {
      return (` - ${item.key}: ${item.value1}\n + ${item.key}: ${item.value2}`);
    }
    return result;
  });
  return `{\n${result.join('\n')}\n}`;
};
