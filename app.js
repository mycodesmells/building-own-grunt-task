var express = require('express');
var app = express();

var posts = require('./features/posts');
var tags = require('./features/tags');

app.use('/posts', posts);
app.use('/tags', tags);

app.listen(3000);