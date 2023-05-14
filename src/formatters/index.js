import getStylish from './stylish.js';
import doPlain from './plain.js';

const formatter = (data, format) => {
  switch (format) {
    case 'stylish':
      return getStylish(data);
    case 'plain':
      return doPlain(data);
    case 'json':
      return JSON.stringify(data);
    default:
      throw new Error(`Unknown ${format}`);
  }
};
export default formatter;
