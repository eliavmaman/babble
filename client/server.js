const express = require('express')
const app = express()
fs = require('fs');
// app.get('/', function (req, res) {
//     res.send('Hello World!')
// })
app.use(express.static('public'));
// app.use(express.static(__dirname + '/images'));
app.listen(8080, function () {
    console.log('Example app listening on port 8080!')
})

app.get('/', function (req, res) {
    fs.readFile('./index.html', function (err, data) {
        res.end(data);
    });
});