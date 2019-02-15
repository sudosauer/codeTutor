'use strict';
module.exports = (sequelize, DataTypes) => {
  const Project = sequelize.define('Project', {
    name: DataTypes.STRING
  }, {});
  Project.associate = function(models) {
    Project.belongsTo(models.User);
    Project.hasMany(models.File);
    Project.hasMany(models.Comment);
  };
  return Project;
};