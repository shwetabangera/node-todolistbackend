//all route hndlers for to do list
const fs = require("fs");
const path = require("path");
const Task = require("../models/Tasks.js");
const uniqid = require("uniqid");
const appError = require("../helpers/appError.js");
const sendErrorMessage = require("../helpers/sendErrorMessage");
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
			new appError(400, "Unsuccessful", "request body is not valid"),
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
const findById = (req, resp, next) => {
	let task = tasks.find((task) => {
		return task.taskid === req.params.taskId;
	});
	if (!task) {
		sendErrorMessage(
			new appError(400, "Unsuccessful", "request body is not valid"),
			req,
			res
		);
	} else {
		next();
	}
};
const updateById = (task, req, resp, next) => {
	Object.keys(req.body).forEach((parameter) => {
		task[parameter] = req.body[parameter];
	});
	sendResponse(200, task, req, resp);
};

module.exports.getAllTasks = getAllTasks;
module.exports.createTask = createTask;
module.exports.updateById = updateById;
module.exports.verifyPostRequest = verifyPostRequest;
