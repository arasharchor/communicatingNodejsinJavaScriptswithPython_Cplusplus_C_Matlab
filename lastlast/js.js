	

var spawn = require("child_process").spawn;
var process = spawn('python',["py.py"]);

	

process.stdout.on('data', function (data){
// Do something with the data returned from python script
console.log(data);
});
