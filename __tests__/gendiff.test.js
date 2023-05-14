import fs from 'fs';
import { fileURLToPath } from 'url';
import path, { dirname } from 'path';
import { expect, describe } from '@jest/globals';
import genDiff from '../src/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);
const readFile = (filename) => fs.readFileSync(getFixturePath(filename), 'utf-8');
const file1Json = getFixturePath('file1.json');
const file2Json = getFixturePath('file2.json');
const file1Yaml = getFixturePath('file1.yaml');
const file2Yaml = getFixturePath('file2.yaml');

describe('gendiff', () => {
  expect(genDiff(file1Json, file2Json)).toEqual(readFile('expectedStylish.txt'));
  expect(genDiff(file1Json, file2Json, 'stylish')).toEqual(readFile('expectedStylish.txt'));
  expect(genDiff(file1Json, file2Json, 'plain')).toEqual(readFile('expectedPlain.txt'));
  expect(genDiff(file1Json, file2Json, 'json')).toEqual(readFile('expectedJson.txt'));

  expect(genDiff(file1Yaml, file2Yaml)).toEqual(readFile('expectedStylish.txt'));
  expect(genDiff(file1Yaml, file2Yaml, 'stylish')).toEqual(readFile('expectedStylish.txt'));
  expect(genDiff(file1Yaml, file2Yaml, 'plain')).toEqual(readFile('expectedPlain.txt'));
  expect(genDiff(file1Yaml, file2Yaml, 'json')).toEqual(readFile('expectedJson.txt'));
});
