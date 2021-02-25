import express, { Request, Response, Router } from 'express';

const router: Router = express.Router();
const exampleRoute = require('./example-route.ts');

// Example json data. Go to localhost:5000/api/docs to test
const exampleData = [
	{
		id: 1,
		firstName: 'Nate',
		lastName: 'Jones',
	},
	{
		id: 2,
		firstName: 'John',
		lastName: 'Doe',
	},
	{
		id: 3,
		firstName: 'Mary',
		lastName: 'Swanson',
	},
];

// Add router binding to /docs, not actual root view
router.get('/', function (req: Request, res: Response) {
	res.send(exampleData);
});

// Attach /example-route as a child route, along with any children of this route
router.use('/example-route', exampleRoute);

module.exports = router;
