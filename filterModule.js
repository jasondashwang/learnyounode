var fs = require('fs');
var path = require('path');

function filterFiles(dir, initExt, callback){
	var ext = '.' + initExt;
	fs.readdir(dir, function(error, list){
		if(error){
			callback(error, null);
		} else {
			var filtered = [];
			for (var i = 0; i < list.length; i++) {
				if(ext === path.extname(list[i])){
					filtered.push(list[i]);
				}
			}

			callback(null, filtered);
		}
	});

}

module.exports = filterFiles;