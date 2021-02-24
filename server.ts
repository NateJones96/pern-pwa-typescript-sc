import express from 'express';
const app = express();

// Routes
const docs = require('./server/api/docs.js');

app.get('/', function (req, res) {
	res.send('The api is working');
});

app.use('/docs', docs);

// "process.env.PORT ||" required for Heroku
const port = process.env.PORT || 5000;

app.listen(port, () => console.log('Server running on port', port));
