import express from "express";
import UserController from "../../controllers/users/user.controller.js";

const UserRoute = express.Router();
const userController = new UserController();

UserRoute.post("/register", (req, res) =>
  userController.registerUser(req, res)
);
UserRoute.post("/login", (req, res) => userController.loginUser(req, res));

export default UserRoute;
