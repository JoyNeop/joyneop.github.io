/*

Insert a post to my blog
Run on Node.js
(c) Copyright 2014 All Rights Reserved by Joy Neop

*/

var fs = require('fs');

var blogPath = '/Users/JoyNeop/Developer/joyneop.github.io/blog';
var maxId = 106;
var insertAs = 15;
for (var i = maxId; i >= insertAs; i--) {
	fs.writeFileSync(blogPath + '/db/' + (i + 1) + '.txt', fs.readFileSync(blogPath + '/db/' + i + '.txt', 'utf8'));
};