# node-package-version-setter

Automate the updating of your version number of your package to a specific value.
To bump/increment your version number, use a package such as package-version-sync.

## Installation

`npm install node-package-version-setter`

## Usage

Note that I'm using newer style node ES6 with TypeScript

```js
var npvs = require('node-package-version-setter');
npvs.setFileVersion('package.json', '0.0.0');
console.log(pvs.version('package.json'));
```