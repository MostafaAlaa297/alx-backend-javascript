const fs = require('fs');

async function countStudents(path) {
	try {
		const data = await fs.readFileSync(path, 'utf-8');
		const lines = data.split('\n').filter(line => line.trim() !== '');
		const students = {};

		for (let i = 1; i < lines.length; i += 1) {
			const [firstName, lastName, age, field] = lines[i].split(',');

			if (!students[field]) {
				students[field] = [];
			}
			students[field].push(firstName);
		}

		const totalStudents = Object.values(students).reduce((acc, curr) => acc + curr.length, 0);
		console.log(`Number of students: ${totalStudents}`);

		for (const field in students) {
			if (students.hasOwnProperty(field)) {
				console.log(`Number of students in ${field}: ${students[field].length}. List: ${students[field].join(', ')}`);
				}
		}
	} catch (error) {
		throw new Error('Cannot load the database');
	}
}
module.exports = countStudents;
