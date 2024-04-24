const url = require('url');
const queryString = require('querystring');
const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    let parsedURL = url.parse(req.url, true);
    console.log(parsedURL);
    console.log(req.url);
    if(req.url==='/'){
        fs.readFile('index1.html', (err, data) => {
            if(err){
                console.log(err);
                res.end("Error while displaying form.");

            }else{
                res.end(data);
            }
        })
    }else if(parsedURL.pathname === '/submit'){
        const dataSent = parsedURL.query;
        fs.writeFile('example.txt', JSON.stringify(dataSent), (err) => {
            if(err){
                res.end("Error writing to the file.");
            }else{
                res.end( "Data written successfully.")
            }
        });
    }
});

server.listen(4000, () => {
    console.log("Server running on port 4000.")
});