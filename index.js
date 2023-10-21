const express = require("express");
const { connection } = require("./src/configs/db");
const { UserModel } = require("./src/models/User.model");
const jwt = require("jsonwebtoken");
const app = express();
app.use(express.json());
const authRoutes = require("./src/routes/auth.route");

const port = 3000;
const secretKey = "xP$8r#4yW@9v&ZsN2Qm*%GpKcD6hFjJn";

app.use("/auth", authRoutes);

app.listen(port, async () => {
  try {
    await connection;
    console.log(`Server is running on port ${port} connected....`);
  } catch (error) {
    console.log(error);
  }
});
