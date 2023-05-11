import parse from './parsers.js';
import getStylish from './stylish.js';
import buildTree from './buildTree.js';
import { getTypeFile, readFile } from './helpFunc.js';

const genDiff = (filePath1, filePath2, format = 'stylish') => {
  const file1 = readFile(filePath1);
  const file2 = readFile(filePath2);

  const object1 = parse(file1, getTypeFile(filePath1));
  const object2 = parse(file2, getTypeFile(filePath2));

  const tree = buildTree(object1, object2);
  return getStylish(tree, format);
};

export default genDiff;
