const express = require("express");

const vehicleRouter = express.Router();

const getVehicleLocation = require("../controllers/getVehicleLocation");

vehicleRouter.all("/:id", getVehicleLocation);

module.exports = vehicleRouter;