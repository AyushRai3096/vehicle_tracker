const vehicleModel = require("../models/vehicle_model");
const firebaseRef = require("../utils/firebase");

const updateVehicleLocation = (vehicleNumber, lat, lng) => {
    return vehicleModel.updateLocation(vehicleNumber, lat, lng).then((result) => {
        return vehicleModel.fetchLocation(vehicleNumber)
    }).catch((err) => {
        console.log(err);
    });
}


const getVehicleLocation = (req, res, next) => {
    console.log("inside get vehicle location id is " + req.params.id);
    const vehicleNumber = req.params.id;

    vehicleModel.fetchLocation(vehicleNumber).then((vehicle) => {
        res.render("location_map.ejs", {
            latitude: vehicle.lat,
            longitude: vehicle.lng
        });

    }).catch((err) => {
        console.log(err);
    })
}

module.exports = getVehicleLocation;