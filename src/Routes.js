const express = require("express");
const UserController = require("./Controllers/UserController");
const { pathToRegexp } = require("path-to-regexp");

const Routes = express.Router();

Routes.get("/api/users", UserController.AllUsers);
Routes.post("/api/users", UserController.AddUser);

Routes.post("/api/users/:_id/exercises", UserController.AddExercises);
Routes.get("/api/users/:_id/logs/:from?:to?:limit?", UserController.LogsUser);

module.exports = Routes;
