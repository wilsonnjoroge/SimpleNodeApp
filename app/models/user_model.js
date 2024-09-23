const { DataTypes } = require('sequelize');
const sequelize = require('../db/briandemo');

const User = sequelize.define('users', {

    fullName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    }

});

module.exports = User;
