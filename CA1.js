const http = require('http');
const fs = require('fs');
const server = http.createServer((req, res) => {
  if (req.method === 'GET' && req.url === "/") { // corrected the typo and case
    const message = 'yo yo roshni singh'; 
    fs.writeFile('example1.txt', message, 'utf8', (err) => { // using asynchronous writeFile instead
      if (err) {
        console.error(err);
        res.end('404 error not found');
      } else {
        res.end('File Content: ' + message);
      }
    });
  }
});
const port = 5000;
server.listen(port, () => console.log(`Server is running on http://localhost:${port}`));
