import _ from 'lodash';

const isComplexValue = (value) => (_.isObject(value) ? '[complex value]' : value);
const isString = (item) => (_.isString(item) && item !== '[complex value]' ? `'${item}'` : item);

const doPlain = (tree) => {
  const iter = (data, acc) => {
    const result = data
      .filter((node) => node.status !== 'unchanged')
      .map((node) => {
        switch (node.status) {
          case 'added':
            return `Property '${acc}${node.key}' was added with value: ${isString(isComplexValue(node.value))}`;
          case 'deleted':
            return `Property '${acc}${node.key}' was removed`;
          case 'nested':
            return iter(node.children, `${acc}${node.key}.`);
          case 'changed':
            return `Property '${acc}${node.key}' was updated. From ${isString(isComplexValue(node.value1))} to ${isString(isComplexValue(node.value2))}`;
          default:
            throw new Error(`Unknown status ${node.status}`);
        }
      });
    return result.join('\n');
  };
  return iter(tree, '');
};

export default doPlain;
