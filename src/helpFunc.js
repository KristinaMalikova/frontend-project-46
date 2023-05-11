import _ from 'lodash';
import path from 'path';
import fs from 'fs';

export const getTypeFile = (filePath) => path.extname(filePath).slice(1);

const getFullPath = (filePath) => path.resolve(process.cwd(), ' __fixtures__', filePath);

export const readFile = (filePath) => {
  const fullPath = getFullPath(filePath);
  const data = fs.readFileSync(fullPath, 'utf-8');
  return data;
};

export const getKeys = (object1, object2) => {
  const keys1 = Object.keys(object1);
  const keys2 = Object.keys(object2);
  const keys = _.union(keys1, keys2);
  return _.sortBy(keys);
};
