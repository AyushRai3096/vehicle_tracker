const express = require("express");

const setLocationRouter = express.Router();

const getSetLocation = require("../controllers/getSetLocation");

setLocationRouter.all("/:id", getSetLocation);

module.exports = setLocationRouter;