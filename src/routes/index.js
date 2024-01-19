const express = require('express');
const router = express.Router();

const TouristRouter = require('./tourist.route')
const AuthenticateRouter = require('./authenticate.route')

router.use('/tourist', TouristRouter);
router.use('/auth', AuthenticateRouter);

module.exports = router;