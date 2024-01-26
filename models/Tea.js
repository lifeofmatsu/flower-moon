const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection.js');

class Tea extends Model {}

Tea.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: DataTypes.STRING(255),
            allowNull: false,
            primaryKey: false,
        },
        category: {
            type: DataTypes.STRING(255),
            allowNull: false,
            primaryKey: false,
        },
        price: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: false,
            autoIncrement: false,
        },
        description: {
            type: DataTypes.STRING(255),
            primaryKey: false,
        },
        sold: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            primaryKey: false,
        },
        // user_id: {
        //     type: DataTypes.INTEGER,
        //     references: {
        //         model: 'user',
        //         key: 'id',
        //     },
        // },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'tea',
    },
);

module.exports = Tea;


// module.exports = (sequelize, DataTypes) => {
//     return sequelize.define('Tea', {
//         name: DataTypes.STRING,
//         description: DataTypes.STRING,
//         price: DataTypes.DECIMAL,
//         imageUrl: DataTypes.STRING
//     });
// };
