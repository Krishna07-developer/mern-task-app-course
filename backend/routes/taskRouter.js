const express = require("express");

const {getTasks , createTasks , getTask , deleteTask , updateTask} = require("../controller/taskController.js")

const router = express.Router();


// Routes
router.route("/").get(getTasks).post(createTasks);
router.route("/:id").get(getTask).put(updateTask).delete(deleteTask)


module.exports = router;