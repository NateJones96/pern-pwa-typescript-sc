import express, { Express, Request, Response } from 'express';
import path from 'path';

const app: Express = express();

// NODE_ENV is set to production on Heroku build
if (process.env.NODE_ENV === 'production') {
	// Serve any static files
	app.use(express.static(path.join(__dirname, 'client/build')));
	// Handle React routing, return all requests to React app
	app.get('*', function (req: Request, res: Response) {
		res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
	});
}