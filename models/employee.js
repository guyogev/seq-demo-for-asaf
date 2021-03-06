'use strict';
module.exports = function(sequelize, DataTypes) {
  var Employee = sequelize.define('Employee', {
    name: DataTypes.STRING,
    active: DataTypes.BOOLEAN,
    OfficeId: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        Employee.belongsTo(models.Office);
        Employee.hasMany(models.Pet);
      }
    }
  });
  return Employee;
};