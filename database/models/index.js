// register models, set up associations between tables, and generate barrel file for the models;

const Student  = require('./Student');
const Campus  = require('./Campus');

Student.belongsTo(Campus);  // Student has only one Campus (Student has campus ID as foreign key)
Campus.hasMany(Student);  // Campus can have many Student

module.exports = {
  Student,
  Campus
};