'use strict';

const fs = require('fs');
const path = require('path');

const express = require('express');
const ejs = require('ejs');
const compression = require('compression');
const markdown = require('markdown-it')();

const app = express();
app.use(compression());
app.set('view engine', 'html');
app.engine('html', ejs.renderFile);

function sendMarkdown(res, filename) {
  fs.readFile(filename,'utf8',function(err, data) {
    if (err) res.send(s)
    else {
      const md = markdown.render(data);
      res.send(md);
    }
  });
}

app.get('/', function(req,res) { sendMarkdown(res, path.join(__dirname,'README.md')) });
app.get('/index.html', function(req,res) { sendMarkdown(res, path.join(__dirname,'README.md')) });
app.get('*.html', function(req,res) { res.render(path.join(__dirname,req.path)) });
app.use("/",  express.static(__dirname));

var myport = process.env.PORT || 3000;
if (process.argv.length>2) myport = process.argv[2];

var server = app.listen(myport, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Arapaho server listening at http://%s:%s', host, port);
});
