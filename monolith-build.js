var monolith = require('html-monolith');
var fs = require('fs');
var file = './dist/index.html';
var options = {
    js: true,
    css: true
};

var result = monolith.inlineSync(file, options);

fs.writeFile( './index.html', result.source, function () {
    
});