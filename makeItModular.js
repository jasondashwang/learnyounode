var filterFiles = require('./filterModule');

var dir = process.argv[2];
var ext = process.argv[3];

filterFiles(dir, ext, function (error, data) {
	if(error){
		return error;
	}
	for (var i = 0; i < data.length; i++) {
		console.log(data[i]);
	}
})
