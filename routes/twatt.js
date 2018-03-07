const express = require('express');
const router = express.Router();

const Twatt_Controller = require('../controllers/twatt.controllers');

router.get('/', Twatt_Controller.get_user_timeline);
router.post('/', Twatt_Controller.post_a_tweet);
router.post('/search',Twatt_Controller.search_a_tweet);


module.exports = router;
