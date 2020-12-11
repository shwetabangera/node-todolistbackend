const uniqid = require("uniqid");
class Task {
  constructor(taskName) {
    this.taskName = taskName;
    this.status = "Pending";
  }
}
module.exports = Task;
