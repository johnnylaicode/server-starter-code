// register models, set up associations between tables, and generate barrel file for the models;

const Student  = require('./Student');
const Campus  = require('./Campus');

Student.belongsTo(Campus);
Campus.hasMany(Student);

module.exports = {
  Student,
  Campus
};