const fs = require('fs');
const path = require('path');
const jdown = require('../dist');

const outputFile = path.join(__dirname, 'contents.json');

jdown('example/content').then(content => {
  fs.writeFileSync(outputFile, JSON.stringify(content, null, 2), 'utf8');
});
