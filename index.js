const http = require('http');
const app = require('./startup/app');

const port = process.env.PORT || 5000;

const server = http.createServer(app);

server.listen(port, () => {
    console.log('----------------------------------------------------------------');
    console.log(`Server Listening on port ${port}`);
});