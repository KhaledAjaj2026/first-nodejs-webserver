const { format } = require('date-fns');
const { v4: uuid } = require('uuid');

const fs = require('node:fs');
const fsPromises = require('node:fs/promises');
const path = require('node:path');

const logEvents = async (message, logName) => {
	const dateTime = `${format(new Date(2023, 8, 24), 'MM/dd/yyyy')}`;
	const logItem = `${dateTime}\t${uuid()}\t${message}\n`;
	console.log(logItem);
	try {
		if (!fs.existsSync(path.join(__dirname, 'logs'))) {
			await fsPromises.mkdir(path.join(__dirname, 'logs'));
		}
		await fsPromises.appendFile(path.join(__dirname, 'logs', logName), logItem);
	} catch (error) {
		console.log(error);
	}
};

module.exports = logEvents;
