const express = require('express');
const router = express.Router();

const { oneTOmanyApi } = require('../controllers/phoneController');

// phone all data
router.get("/many/:name", oneTOmanyApi);


module.exports = router;
