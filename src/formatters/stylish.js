import _ from 'lodash';

const getIndent = (depth, replacer = ' ', spacesCount = 2) => replacer.repeat((depth * spacesCount) - 2);

const getIndentBrackets = (depth, replacer = ' ', spacesCount = 2) => replacer.repeat((depth * spacesCount) - 4);

const stringify = (nodeValue, depth = 2) => {
  if (!(_.isObject(nodeValue))) {
    return `${nodeValue}`;
  }
  const result = Object.entries(nodeValue).map(([key, value]) => `${getIndent(depth + 2)}  ${key}: ${stringify(value, depth + 2)}`);
  return `{\n${result.join('\n')}\n  ${getIndent(depth)}}`;
};

const getStylish = (tree, depth = 2) => {
  const result = tree
    .flatMap((
      {
        status, key, value, value1, value2, children,
      },
    ) => {
      switch (status) {
        case 'added':
          return `${getIndent(depth)}+ ${key}: ${stringify(value, depth)}`;
        case 'deleted':
          return `${getIndent(depth)}- ${key}: ${stringify(value, depth)}`;
        case 'nested':
          return `${getIndent(depth)}  ${key}: ${getStylish(children, depth + 2)}`;
        case 'changed':
          return `${getIndent(depth)}- ${key}: ${stringify(value1, depth)}\n${getIndent(depth)}+ ${key}: ${stringify(value2, depth)}`;
        case 'unchanged':
          return `${getIndent(depth)}  ${key}: ${stringify(value, depth)}`;
        default:
          throw new Error(`Unknown status ${status}`);
      }
    });
  return `{\n${result.join('\n')}\n${getIndentBrackets(depth)}}`;
};

export default getStylish;
