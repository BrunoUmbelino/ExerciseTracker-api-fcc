const express = require("express");
const Controller = require("./Controller");

const Routes = express.Router();

Routes.get("/api/users", Controller.AllUsers);
Routes.post("/api/users", Controller.AddUser);

Routes.post("/api/users/:_id/exercises", Controller.AddExercises);
Routes.get("/api/users/:_id/logs", Controller.LogsUser);

module.exports = Routes;
