const http = require('http');
const countStudents = require('./3-read_file_async');

const app = http.createServer((req, res) => {
    const { url } = req;

    if (url === '/') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.write('Hello Holberton School!');
        res.end();
    } else if (url === '/students') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.write('This is the list of our students\n');

        countStudents(process.argv[2])
            .then(() => {
                res.end();  // Ending the response after data is logged
            })
            .catch((error) => {
                res.write(error.message);
                res.end();  // Ending the response after error is logged
            });
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.write('Not Found');
        res.end();
    }
});

app.listen(1245, () => {
    console.log('Server is listening on port 1245');
});

module.exports = app;
