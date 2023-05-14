import path from 'path';
import fs from 'fs';
import parse from './parsers.js';
import formatter from './formatters/index.js';
import buildTree from './buildTree.js';

export const getTypeFile = (filePath) => path.extname(filePath).slice(1);

const getFullPath = (filePath) => path.resolve(process.cwd(), ' __fixtures__', filePath);

const readFile = (filePath) => {
  const data = fs.readFileSync(getFullPath(filePath), 'utf-8');
  return data;
};

const genDiff = (filePath1, filePath2, format = 'stylish') => {
  const data1 = readFile(filePath1);
  const data2 = readFile(filePath2);

  const object1 = parse(data1, getTypeFile(filePath1));
  const object2 = parse(data2, getTypeFile(filePath2));

  const tree = buildTree(object1, object2);
  return formatter(tree, format);
};

export default genDiff;
