/**
 * Very simple xml test
 */
var to = require('..');

// load the xml
var xmldoc = to.format.xml.load(__dirname + '/sample.xml');

// lets print it on the screen - internal format
console.log('internal js obj for sample.xml');
console.log('==============================');
console.log(to.stringify(xmldoc));

// load an xml with array
var xmldoc1 = to.format.xml.load(__dirname + '/sample1.xml');

// lets print it as json
console.log('json for sample1.xml');
console.log('======================');
console.log(to.format.json.stringify(xmldoc1));

// lets print it as yaml
console.log('yaml for sample1.xml');
console.log('======================');
console.log(to.format.yaml.stringify(xmldoc1));
