/*==================================================
/routes/index.js

It defines all the routes used by Express application.
==================================================*/
// Import Express module
const express = require('express');
// Create an Express router function called "router"
const router = express.Router();

// Sub-Routers ("students" and "campuses")
const studentsRouter = require('./students');  // Import sub-router functions in students.js file
const campusesRouter = require('./campuses');  // Import sub-router functions in campuses.js file

// Set up sub-route's top-level route and attach all sub-routes to it
// Add top-level URL path "/students" before sub-routes from students.js and campuses.js files
router.use('/students', studentsRouter);  // Updated URL paths: "/students/" and "/students/:id"
// Add top-level URL path "/campuses" before sub-routes
router.use('/campuses', campusesRouter);  // Updated URL paths: "/campuses/" and "/campuses/:id"

// Export sub-routers, so that they can be used by the top-level (main) file app.js
module.exports = router;