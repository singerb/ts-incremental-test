import { getTest } from '../lib/common';
import lib from '../lib/library';

const test = getTest();
const libName = lib();

console.log( 'From JS, Got a test: ' + test );
console.log( 'In JS, I am library: ' + libName );