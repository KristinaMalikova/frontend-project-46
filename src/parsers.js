import yaml from 'js-yaml';

const parse = (data, exFormat) => {
  switch (exFormat) {
    case 'json':
      return JSON.parse(data);
    case 'yaml':
      return yaml.load(data);
    case 'yml':
      return yaml.load(data);
    default:
      throw new Error(`Unknown format: '${exFormat}'!`);
  }
};

export default parse;
