var fs = require('fs');

fs.readFile(process.argv[2], 'utf8', function(error, data){
	var number = data.split('\n').length - 1;
	console.log(number);
});