/*==================================================
/routes/index.js

It defines all the routes used by Express application.
==================================================*/
// Import Express module
const express = require('express');
// Create an Express router function called "router"
const router = express.Router();

// Sub-Routers ("students" and "campuses")
const studentsRouter = require('./students');  // Import "students" sub-router functions
const campusesRouter = require('./campuses');  // Import "campuses" sub-router functions

// Set up sub-route's top-level route and attach all sub-routes to it
// Add top-level URL path "/students" before sub-routes
router.use('/students', studentsRouter);  // URL paths: "/students/" and "/students/:id"
// Add top-level URL path "/campuses" before sub-routes
router.use('/campuses', campusesRouter);  // URL paths: "/campuses/" and "/campuses/:id"

// Export sub-routers, so that they can be used by the top-level (main) file app.js
module.exports = router;