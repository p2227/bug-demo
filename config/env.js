#!/usr/bin/env node
/* eslint-disable import/no-commonjs */

const { readFile, writeFile } = require('node:fs/promises');
const path = require('node:path');

const env = process.argv[2] || 'prod';

console.log('process.argv[2] || "prod";', process.argv);

const configFilePath = path.resolve(__dirname, '../src/constants/env.ts');

async function changeEnv(en = process.env.NODE_ENV) {
  const configContent = await readFile(configFilePath);
  const newContent = configContent
    .toString()
    .replace(/const env = ['"](.*)['"]/g, `const env = '${en}'`);
  await writeFile(configFilePath, newContent);
}

(async function () {
  await changeEnv(env);
})();
