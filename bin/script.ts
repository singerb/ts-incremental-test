import { getTest } from '../lib/common';
import lib from '../lib/library';

const test = getTest();
const libName = lib();

console.log( 'Got a test: ' + test );
console.log( 'I am library: ' + libName );