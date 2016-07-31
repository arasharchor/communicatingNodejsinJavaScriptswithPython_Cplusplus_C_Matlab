var PythonShell = require('python-shell');
 
PythonShell.run('detect_blur.py', function (err) {
  if (err) throw err;
  console.log('finished');
});
