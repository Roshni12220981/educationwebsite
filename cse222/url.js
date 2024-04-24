// const url = require('url');
// const urlString = 'http://www.example.com/index.html';
// const parsedUrl = url.parse(urlString,true);
// console.log(parsedUrl.pathname);
// console.log(parsedUrl.query);

//Query string
const querystring = require('querystring');
const queryString = 'foo=bar&baz=qux';
const parsedQueryString = querystring.parse(querystring);
console.log(parsedQuery);