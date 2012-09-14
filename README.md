# to.js
collection of convertors.
Comes with command line options to use the convertors along with a library version that can be used within programs as well.

# Solves
  * handling different input/output formats: yaml,json,xml

## Installation
```bash
npm install -g to
npm install to
```

## Usage
Within program
```js
var to = require('to');

# Load yaml
var yamldoc = to.format.yaml.load('config.yaml');

# print doc in yaml 
var doc = ...;
console.log(to.format.yaml.stringify(doc));

```


## Todo
 * Input json
 * Input xml
 * Input html (be forgiving with bad html)
 * Output json
 * Output xml
 * allow beautification params for all outputs 

