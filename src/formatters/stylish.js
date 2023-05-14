import _ from 'lodash';

const getIndent = (depth, replacer = ' ', spacesCount = 2) => replacer.repeat((depth * spacesCount) - 2);

const stringify = (nodeValue, depth = 2) => {
  if (!(_.isObject(nodeValue))) {
    return `${nodeValue}`;
  }
  const result = Object.entries(nodeValue).map(([key, value]) => `${getIndent(depth + 2)}  ${key}: ${stringify(value, depth + 2)}`);
  return `{\n${result.join('\n')}\n  ${getIndent(depth)}}`;
};

const getStylish = (tree, depth = 2) => {
  const result = tree.map((node) => {
    switch (node.status) {
      case 'added':
        return `${getIndent(depth)}+ ${node.key}: ${stringify(node.value, depth)}`;
      case 'deleted':
        return `${getIndent(depth)}- ${node.key}: ${stringify(node.value, depth)}`;
      case 'nested':
        return `${getIndent(depth)}  ${node.key}: ${getStylish(node.children, depth + 2)}`;
      case 'changed':
        return `${getIndent(depth)}- ${node.key}: ${stringify(node.value1, depth)}\n${getIndent(depth)}+ ${node.key}: ${stringify(node.value2, depth)}`;
      case 'unchanged':
        return `${getIndent(depth)}  ${node.key}: ${stringify(node.value, depth)}`;
      default:
        throw new Error(`Unknown status ${node.status}`);
    }
  });
  return `{\n${result.join('\n')}\n}`;
};

export default getStylish;
