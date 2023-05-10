import _ from 'lodash';
import path from 'path';
import fs from 'fs';

const getObject = (filePath) => {
  const fullPath = path.resolve(process.cwd(), ' __fixtures__', filePath);
  const data = fs.readFileSync(fullPath, 'utf-8');
  const object = JSON.parse(data);
  return object;
};

const getKeys = (object1, object2) => {
  const keys1 = Object.keys(object1);
  const keys2 = Object.keys(object2);
  const keys = _.union(keys1, keys2);
  return _.sortBy(keys);
};

const getDifferences = (object1, object2) => {
  const keys = getKeys(object1, object2);
  const differences = keys.map((key) => {
    if (!_.has(object1, key) && _.has(object2, key)) {
      return { key, status: 'added', value: object2[key] };
    }
    if (_.has(object1, key) && !_.has(object2, key)) {
      return { key, status: 'deleted', value: object1[key] };
    }
    if (_.isEqual(object1[key], object2[key]) === true) {
      return { key, status: 'unchanged', value: object1[key] };
    }
    return {
      key, status: 'changed', value1: object1[key], value2: object2[key],
    };
  });
  return differences;
};

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

const genDiff = (filePath1, filePath2) => {
  const object1 = getObject(filePath1);
  const object2 = getObject(filePath2);
  const differences = getDifferences(object1, object2);
  return getResultComparison(differences);
};

export default genDiff;
