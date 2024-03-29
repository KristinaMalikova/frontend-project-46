import _ from 'lodash';

const getKeys = (object1, object2) => {
  const keys1 = Object.keys(object1);
  const keys2 = Object.keys(object2);
  const keys = _.union(keys1, keys2);
  return _.sortBy(keys);
};

const buildTree = (object1, object2) => {
  const keys = getKeys(object1, object2);
  const tree = keys.map((key) => {
    if (!_.has(object1, key) && _.has(object2, key)) {
      return { key, status: 'added', value: object2[key] };
    }
    if (_.has(object1, key) && !_.has(object2, key)) {
      return { key, status: 'deleted', value: object1[key] };
    }
    if (_.isObject(object1[key]) && _.isObject(object2[key])) {
      return { key, status: 'nested', children: buildTree(object1[key], object2[key]) };
    }
    if (_.isEqual(object1[key], object2[key]) === true) {
      return { key, status: 'unchanged', value: object1[key] };
    }
    return {
      key, status: 'changed', value1: object1[key], value2: object2[key],
    };
  });
  return tree;
};

export default buildTree;
