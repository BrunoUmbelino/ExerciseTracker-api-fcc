const express = require("express");
const UserController = require("./UserController");
const { query, body } = require("express-validator");

const Routes = express.Router();

Routes.get("/api/users", UserController.GetAllUsers);
Routes.post(
  "/api/users",
  body("username").isAlphanumeric().isLength({ max: 20 }),
  UserController.AddUser
);

Routes.post(
  "/api/users/:_id/exercises",
  body("description").isString().notEmpty(),
  body("duration").isNumeric(),
  body("date").optional().isDate(),
  UserController.AddExercises
);

Routes.get(
  "/api/users/:_id/logs/:from?:to?:limit?",
  query("from").optional().isDate(),
  query("to").optional().isDate(),
  query("limit").optional().isNumeric(),
  UserController.LogsUser
);

module.exports = Routes;
