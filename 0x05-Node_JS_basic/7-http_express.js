const express = require('express');
const app = express();
const PORT = 1245;
const countStudents = require('./3-read_file_async');

app.get("/", (req, res) => {
	res.send("Hello Holberton School!");
});

app.get("/students", (req, res) => {
	res.write('This is the list of our students\n');
	countStudents(process.argv[2])
		.then((output) => {
			res.end();
		})
		.catch((error) => {
			res.status(500).end(error.message);
		});
});

app.listen(PORT, () => {
	console.log(`Server is running on PORT: ${PORT}`);
});

module.exports = app;
