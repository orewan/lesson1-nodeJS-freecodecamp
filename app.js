// npm - global command, comes with node
// npm --version

// local dependency  - use it only in this particular project
// npm i <packageName>

// global dependency - use it in any project
// npm install -g <packageName>
// sudo install -g <pakageName> (mac)

// package.json - manifest file(store important info about project/package)
// manual approach (create package.json in the root, create properties etc)
// npm init (step by step, prss enter to skip)
// npm init -y (everything by default)
/*
const _ = require('lodash');

const items    = [1, [2, [3,[4]]]];
const newItems = _.flattenDeep(items);
console.log(newItems);

*/
require('./12-http')