import path from 'path';
import { readFileSync } from 'fs';
import parse from './parsers.js';
import formatter from './formatters/index.js';
import buildTree from './buildTree.js';

const getTypeFile = (pathFile) => path.extname(pathFile).slice(1);
const getData = (filepath) => parse(readFileSync(filepath, 'utf-8'), getTypeFile(filepath));
const buildFullPath = (filepath) => path.resolve(process.cwd(), ' __fixtures__', filepath);

export default (pathFile1, pathFile2, format = 'stylish') => {
  const dataFile1 = getData(buildFullPath(pathFile1));
  const dataFile2 = getData(buildFullPath(pathFile2));
  const diff = buildTree(dataFile1, dataFile2);
  return formatter(diff, format);
};
