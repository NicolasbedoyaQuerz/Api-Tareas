const db = require('../utils/database');
const { DataTypes } = require('sequelize');

const Users = db.define('users', {
      usersname: {
          type: DataTypes.STRING,
          allowNull: false,
          unique: true
   },  
   email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
            isEmail: true,
        }
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
}, {
    timestamps: false
});

module.exports = Users;