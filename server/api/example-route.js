const express = require('express');
const router = express.Router();

// Add binding to /example-route, not actual root view
router.get('/', function (req, res) {
	res.send('The example route is working');
});


module.exports = router;