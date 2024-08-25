const { readDatabase } = require("../utils");

class StudentsController {
	static getAllStudents(req, res) {
		readDatabase(process.argv[2])
			.then((students) => {
				let responseText = 'This is the list of our students\n';

				const sortedFields = Object.keys(students).sort((a, b) =>
					a.toLowerCase().localeCompare(b.toLowerCase())
				);

				for(const field of sortedFields) {
					const fieldStudents = students[field];
					responseText += `Number of students in ${field}: ${fieldStudents.length}. List: ${fieldStudents.join(', ')}\n`;
				}

				res.status(200).send(responseText.trim());
			})
			.catch((err) => {
				res.status(500).send('Cannot load the database');
			});
	}

	static getAllStudentsByMajor(req, res, ) {
		const major = req.params.major;
		if (major !== 'CS' && major !== 'SWE') {
			return res.status(500).send('Major parameter must be CS or SWE');
		}
		readDatabase(process.argv[2])
                        .then((students) => {
				const majorStudents = students[major];
				if(!majorStudents) {
					return res.status(500).send('Cannot load the database');
				}
                                res.status(200).send(`List: ${majorStudents.join(', ')}`);
                        })
                        .catch((err) => {
                                res.status(500).send('Cannot load the database');
                        });
	}
}

module.exports = StudentsController;
