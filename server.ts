import express from 'express';
const app = express();

// Routes for API
// Using structure found in this example: https://stackoverflow.com/a/37309212/4372734
// Non-root routes found in /routes folder (say that 5 times fast)
const docs = require('./server/api/docs.js');

app.get('/', function (req, res) {
	res.send('The api is working');
});

app.use('/docs', docs);

// "process.env.PORT ||" required for Heroku
const port = process.env.PORT || 5000;

app.listen(port, () => console.log('Server running on port', port));
