const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection.js');

class OrderItem extends Model {}

OrderItem.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        qty: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: false,
            autoIncrement: false,
        },
        itemId: {
            type: DataTypes.INTEGER,
            references: {
                model: 'item',
                key: 'id',
            },
        },
        orderId: {
            type: DataTypes.INTEGER,
            references: {
                model: 'order',
                key: 'id',
            },
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'orderItem',
    },
);

module.exports = OrderItem;
