//all route hndlers for to do list
const fs = require("fs");
const path = require("path");
const Task = require("../models/Tasks");
const uniqid = require("uniqid");
const AppError = require("../helpers/appErrorClass");
const sendErrorMessage = require("../helpers/sendError");
const sendResponse = require("../helpers/sendResponse");
const fileName = path.join(__dirname, "..", "data", "tasks.json");
const tasks = JSON.parse(fs.readFileSync(fileName, "utf-8"));

const verifyPostRequest = (req, res, next) => {
  console.log("inside verify task", req.body);
  const requiredProperties = ["taskName"];
  // every propert in requiredProperties should be there
  let result = Object.keys(req.body).every((key) => {
    return req.body[key];
  });

  if (!result) {
    sendErrorMessage(
      new AppError(400, "Unsuccessful", "request body is not valid"),
      req,
      res
    );
  } else {
    next();
  }
};
const getAllTasks = (req, res, next) => {
  res.status(200).json({
    status: "Successful",
    data: tasks,
  });
};

const createTask = (req, res, next) => {
  console.log(req.body);
  tasks.push(req.body);
  fs.writeFile(fileName, JSON.stringify);
  res.send("Task created");
};

module.exports.getAllTasks = getAllTasks;
module.exports.createTask = createTask;
module.exports.verifyPostRequest = verifyPostRequest;
