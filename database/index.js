/*==================================================
/database/index.js

It exports both database instance and models so that "App.js" file can import them from "database" folder.
==================================================*/
const db = require('./db');  // Database instance

require('../database/models');  // Export models

module.exports = db;  // Export database instance