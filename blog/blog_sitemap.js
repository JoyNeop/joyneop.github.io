/*

Blog Sitemap Generator
Run on Node.js
(c) Copyright 2014 All Rights Reserved by Joy Neop

*/

var blogPath = __dirname;
var postTemplate = '\n<url>\n\t<loc>__LOC__</loc>\n\t<lastmod>__MOD__</lastmod>\n\t<priority>0.8</priority>\n</url>\n';
var listJson;
var accumulate = '\n<url>\n\t<loc>http://joyneop.xyz/blog/archive.html</loc>\n\t<priority>0.5</priority>\n</url>\n';

var fs = require('fs');

listJson = JSON.parse(fs.readFileSync(blogPath + '/list.json', 'utf8'));

var maxId = 220;
for (var i = 0; i <= maxId && i < listJson.list.length; i++) {
	accumulate = postTemplate.replace(/__LOC__/g, 'http://joyneop.xyz/blog/?p=' + i).replace(/__MOD__/g, listJson.list[i]['Time']) + accumulate;
};


fs.writeFileSync(blogPath + '/blog_sitemap.xml', accumulate);

console.log('Done!');