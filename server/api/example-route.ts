import express, { Request, Response, Router } from 'express';

const router: Router = express.Router();

// Example json data. Go to localhost:5000/api/docs to test
const exampleData = {
    data: 'Example API Route is working'
};

// Add binding to /example-route, not actual root view
router.get('/', function (req: Request, res: Response) {
	res.send(exampleData);
});


module.exports = router;