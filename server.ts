import express, { Express, Request, Response } from 'express';

const app: Express = express();

// Routes for API
// Using structure found in this example: https://stackoverflow.com/a/37309212/4372734
// Non-root routes found in /routes folder (say that 5 times fast)
const docs = require('./server/api/docs.ts');

app.get('/api/', function (req: Request, res: Response) {
	res.send('The api is working');
});

app.use('/api/docs', docs);

// "process.env.PORT ||" required for Heroku
const port = process.env.PORT || 5000;

app.listen(port, () => console.log('Server running on port', port));
