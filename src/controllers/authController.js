// authController.js
const jwt = require("jsonwebtoken");
const UserModel = require("../models/User.model");

const secretKey = "xP$8r#4yW@9v&ZsN2Qm*%GpKcD6hFjJn";


const test = (req, res) => {
  res.send("Hello, Node.js!");
}

const register = async (req, res) => {
  const payload = req.body;
  try {
    const user = new UserModel(payload);
    await user.save();
    res.send("registered........");
  } catch (error) {
    res.send("Error in registering.......");
    console.log(error);
  }
};

const login = async (req, res) => {
  const { email, pass } = req.body;
  try {
    const user = await UserModel.findOne({ email, pass });
    if (user) {
      const token = jwt.sign(
        { userId: user._id, email: user.email },
        secretKey,
        { expiresIn: "1h" }
      );
      res.status(200).json({
        message: "Login successful",
        token: token,
      });
    } else {
      res.status(401).json({
        message: "Login failed. Invalid email or password.",
      });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Some internal error occurred.",
    });
  }
};

module.exports = {
  register,
  login,
  test
};
