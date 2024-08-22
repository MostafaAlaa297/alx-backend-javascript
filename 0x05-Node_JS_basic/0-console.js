const process = require('process');

function displayMessage(message) {
	process.stdout.write(message + '\n');
}

module.exports = displayMessage;
