import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import sequelize from "./config/db-config.js";
import userRoute from "./Routes/userRoute.js"
import productRoute from "./Routes/productRoute.js"
const app = express();
const PORT = 4001;

app.use(cors());
sequelize.sync();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/user", userRoute);
app.use("/product", productRoute);

app.listen(PORT, () => {
  console.log(`Server is listening at port ${PORT}`);
});
