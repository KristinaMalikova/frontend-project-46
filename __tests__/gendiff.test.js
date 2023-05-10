import fs from 'fs';
import { expect, describe } from '@jest/globals';
import { fileURLToPath } from 'url';
import path, { dirname } from 'path';
import genDiff from '../src/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);
const readFile = (filename) => fs.readFileSync(getFixturePath(filename), 'utf-8');

const file1Json = getFixturePath('file1.json');
const file2Json = getFixturePath('file2.json');
const expectedJson = readFile('expectedFileJson.txt');
const file1Yml = getFixturePath('file1.yml');
const file2Yml = getFixturePath('file2.yml');
const expectedYml = readFile('expectedFileYml.txt');

describe('Checking flat files', () => {
  const actualYml = genDiff(file1Yml, file2Yml);
  const actualJson = genDiff(file1Json, file2Json);
  expect(actualYml).toBe(expectedYml);
  expect(actualJson).toBe(expectedJson);
});
