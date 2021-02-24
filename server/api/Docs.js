const express = require('express');
const router = express.Router();

const exampleRoute = require('./example-route.js');

// Add router binding to /docs, not actual root view
router.get('/', function (req, res) {
	res.send('The docs are working');
});

// Attach /example-route as a child route, along with any children of this route
router.use('/example-route', exampleRoute);

module.exports = router;