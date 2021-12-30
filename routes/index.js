const express = require('express');
const router = express.Router();

// Subrouters;
const studentsRouter = require('./students');
const campusesRouter = require('./campuses');

// Mount our subrouters to assemble our apiRouter;
router.use('/students', studentsRouter);
router.use('/campuses', campusesRouter);

// Export our apiRouter, so that it can be used by our main app in app.js;
module.exports = router;