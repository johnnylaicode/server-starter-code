/*==================================================
/database/utils/creatDB.js

It creates the actual Postgres database. 
After the Postgres database is created, Sequelize can connect to it.
==================================================*/
const pgtools = require('pgtools');  // Import tool to create Postgres database.
const {dbName, dbUser, dbPwd} = require('./configDB');  // Import the database name, username, and password.

// Declare configuration parameters of the Postgres database.
const config = {
  user: dbUser,
  host: 'localhost',
  port: 5432,
  password: dbPwd
};
    
// Define function to create Postgres database.
// If the database of that name already exists, this does nothing.
// If the database doesn't exist, this will create the Postgres database of that name. 
const createDB = async () => {
  try {
    await pgtools.createdb(config, dbName);
    console.log(`Successfully created the database: ${dbName}!`);  // Display message if database creation successful
  } 
  catch (err) {
    if (err.name === 'duplicate_database') {
      console.log(`Database ${dbName} already exists`);  // Display message if database already exists
      return;
    } 
    else {
      console.error('createDB error:', err);  // Display error message if error occurs
      process.exit(1);
    }
  }
}

// Export the database creation function
module.exports = createDB;