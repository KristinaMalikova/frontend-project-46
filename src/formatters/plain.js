import _ from 'lodash';

const stringify = (value) => {
  if (_.isObject(value)) {
    return '[complex value]';
  }
  return typeof value === 'string' ? `'${value}'` : String(value);
};

const doPlain = (tree) => {
  const iter = (data, acc) => {
    const result = data
      .filter((node) => node.status !== 'unchanged')
      .map((node) => {
        switch (node.status) {
          case 'added':
            return `Property '${acc}${node.key}' was added with value: ${stringify(node.value)}`;
          case 'deleted':
            return `Property '${acc}${node.key}' was removed`;
          case 'nested':
            return iter(node.children, `${acc}${node.key}.`);
          case 'changed':
            return `Property '${acc}${node.key}' was updated. From ${stringify(node.value1)} to ${stringify(node.value2)}`;
          default:
            throw new Error(`Unknown status ${node.status}`);
        }
      });
    return result.join('\n');
  };
  return iter(tree, '');
};

export default doPlain;
