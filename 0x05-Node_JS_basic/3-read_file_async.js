const fs = require('fs');

async function countStudents(path) {
    try {
        const data = await fs.readFile(path, 'utf-8');
        const lines = data.split('\n').filter(line => line.trim() !== '');
        const students = {};
	let output = '';

        for (let i = 1; i < lines.length; i += 1) {
            const [firstName, lastName, age, field] = lines[i].split(',');

            if (!students[field]) {
                students[field] = [];
            }
            students[field].push(firstName);
        }

        const totalStudents = Object.values(students).reduce((acc, curr) => acc + curr.length, 0);
	output += `Number of students: ${totalStudents}\n`;

        for (const field in students) {
            if (students.hasOwnProperty(field)) {
		    output += `Number of student in ${filed}: ${students[filed].length}. List: ${students[filed].join(", ")}\n`;
            }
        }
	return output.trim();
    } catch (error) {
	    console.error('Error:', error);
        throw new Error('Cannot load the database');
    }
}
module.exports = countStudents;
