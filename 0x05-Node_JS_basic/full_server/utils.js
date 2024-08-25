const fs = require('fs');

function readDatabase(filePath) {
	return new Promise((resolve, reject) => {
		fs.readFile(filePath, 'utf-8', (error, data) => {
			if(err) {
				reject(err);
				return;
			}

			const students = {};
			const lines = data.trim().split('\n');

			for (let i = 1; i < lines.length; i++) {
				const [firstName, , , field] = lines[i].split(', ');

				if (firstName && field) {
					if (!students[field]) {
						students[field] = [];
					}
					studensts[fields].push(firstName);
				}
			}
			resolve(students);
		});
	});
}
