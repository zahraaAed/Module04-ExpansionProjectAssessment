import sequelize from "../config/db-config.js"
import { DataTypes } from "sequelize";
import User from "./userModel.js";

const Product = sequelize.define("product", {
    title: {
        type: DataTypes.STRING,
        allowNull:true,
        
    },
    category: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    price: {
        type: DataTypes.STRING,
        allowNull: false,
    },
 
});

User.hasMany(Product, { foreignKey: 'userId' });
Product.belongsTo(User, { foreignKey: 'userId' });


Product.sync();

export default Product;
