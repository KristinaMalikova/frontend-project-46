import { fileURLToPath } from 'url';
import path, { dirname } from 'path';
import genDiff from '../src/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);

const file1Json = getFixturePath('file1.json');
const file2Json = getFixturePath('file2.json');
const expected = getFixturePath('expectedFileJson.txt');

describe('Checking flat files', () => {
  const actual = genDiff(file1Json, file2Json);
  expect(actual).toBe(expected);
});
