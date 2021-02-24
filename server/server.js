const express = require('express');
const app = express();

app.get('/', function (req, res) {
	res.send('The server is working');
});

// process.env.port || required for Heroku
const port = process.env.PORT || 5000;

app.listen(port, () => console.log('Server running on port', port));
