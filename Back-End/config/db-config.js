import { Sequelize } from "sequelize";

const sequelize = new Sequelize("productProject", "root", "", {
  dialect: "mysql",
  host: "localhost",
  port: "4443",
});

try {
  await sequelize.authenticate();
  console.log("Connection has been established successfully.");
} catch (error) {
  console.error("Unable to connect to the database: ", error);
}


export default sequelize;