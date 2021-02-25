import express, { Request, Response, Router } from 'express';

const router: Router = express.Router();

const exampleRoute = require('./example-route.ts');

// Add router binding to /docs, not actual root view
router.get('/', function (req: Request, res: Response) {
	res.send('The docs are working');
});

// Attach /example-route as a child route, along with any children of this route
router.use('/example-route', exampleRoute);

module.exports = router;