
const vehicleModel = require("../models/vehicle_model");

const getDashboard = (req, res, next) => {

    vehicleModel.fetchAllVehicles().then((vehicles) => {

        console.log("inside getdashboard " + vehicles[0]._id);
        res.render("dashboard.ejs", {
            vehicleList: vehicles
        });
    }).catch((err) => {
        console.log(err);
    });

}

module.exports = getDashboard;