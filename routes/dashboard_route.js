const express = require("express");

const dashboardRouter = express.Router();

const getDashboard = require("../controllers/getDashboard");

dashboardRouter.all("/", getDashboard);

module.exports = dashboardRouter;