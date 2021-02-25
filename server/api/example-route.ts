import express, { Request, Response, Router } from 'express';

const router: Router = express.Router();

// Add binding to /example-route, not actual root view
router.get('/', function (req: Request, res: Response) {
	res.send('The example route is working');
});


module.exports = router;