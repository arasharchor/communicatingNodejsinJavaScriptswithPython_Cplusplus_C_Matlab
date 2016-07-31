var express = require('express');
var app = express();
/*
app.get('/', function (req, res) {
  res.send('Hello World!');
});

ajax({
  type: "POST",
  url: "detect_blur.py",
  data: { param: text}
}).done(function( o ) {
   // do something
});
*/
/*
var xhr = new XMLHttpRequest();
xhr.open("GET", "detect_blur.py?text=" + text, true);
xhr.responseType = "JSON";
xhr.onload = function(e) {
  var arrOfStrings = JSON.parse(xhr.response);
}
xhr.send();

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
*/

/*
$.ajax({
type: "POST",
url: "test.py",
data: { param: text}
}).done(function(o) {
    console.log(data);
    console.log(text);
});

*/

function runPyScript(input){
    var jqXHR = $.ajax({
        type: "POST",
        url: "test.py",
        async: false,
        data: { param: input }
    });

    return jqXHR.responseText;
}

// do something with the response
response= runPyScript('data to process');
console.log(response);


app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
