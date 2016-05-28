var fs = require('fs');
var path = require('path');

var dir = process.argv[2];
var ext = process.argv[3];

fs.readdir(dir, function(error, list){
	for (var i = 0; i < list.length; i++) {
		var extension = path.extname(list[i]);
		var realExtension = extension.slice(1,extension.length);
		if(realExtension === ext){
			console.log(list[i]);
		}
	}
});