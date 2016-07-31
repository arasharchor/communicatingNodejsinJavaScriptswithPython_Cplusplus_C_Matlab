var PythonShell = require('python-shell');
 



var options = {
                 args: ['image_001.png']

};
 

var pyshell = new PythonShell('tp2.py');
            pyshell.end(function (err, results) {
  if (err) throw err;
  // results is an array consisting of messages collected during execution 
  console.log(results);
});

