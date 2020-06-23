
const vehicleModel = require("../models/vehicle_model");

const getVehicleLocation = (req, res, next) => {
    const vehicleNumber = req.params.id;
    vehicleModel.fetchLocation(vehicleNumber).then((vehicle) => {
        console.log("inside fetchlocation " + vehicle.lat + " " + vehicle.lng);
        res.render("location_map.ejs", {
            latitude: vehicle.lat,
            longitude: vehicle.lng
        });
    }).catch((err) => {
        console.log(err);
    });
}

module.exports = getVehicleLocation;