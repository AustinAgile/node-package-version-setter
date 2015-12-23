var fs = require('fs');
var path = require('path');
var _ = require('lodash');
var stripBom = require('strip-bom');

var filePath = function (fileName) {
	return path.join(path.dirname(module.parent.filename), fileName);
};

var getObjFromFile = function (fileName) {
	return JSON.parse(stripBom(fs.readFileSync(filePath(fileName), 'utf8')));
};

exports.version = function (fileName) {
	return getObjFromFile(fileName).version;
};

exports.setFileVersion = function (fileName, version) {
    var json = JSON.stringify(_.assign(getObjFromFile(fileName), { version: version }), null, '\t');
    fs.writeFileSync(filePath(fileName), json, { encoding: 'utf8' });
};