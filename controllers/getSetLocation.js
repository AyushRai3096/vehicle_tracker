
const vehicleModel = require("../models/vehicle_model");

const firebaseRef = require("../utils/firebase");

const updateVehicleLocation = (vehicleNumber, lat, lng) => {
    return vehicleModel.updateLocation(vehicleNumber, lat, lng).then((result) => {
        return vehicleModel.fetchLocation(vehicleNumber)
    }).catch((err) => {
        console.log(err);
    });
}

const getSetLocation = (req, res, next) => {

    const vehicleNumber = req.params.id;
    firebaseRef.once("value", (snapshot) => {
        console.log("once value " + snapshot.val()[vehicleNumber].lng);
        newLat = snapshot.val()[vehicleNumber].lat;
        newLng = snapshot.val()[vehicleNumber].lng;
        vehicleModel.updateLocation(vehicleNumber, newLat, newLng)
            .then((vehicle) => {
                console.log("now moving to map screen");
                // console.log("inside fetchlocation " + vehicle.lat + " " + vehicle.lng);
                res.redirect("/dashboard/vehicle_location/" + vehicleNumber);
            }).catch((err) => {
                console.log(err);
            });

    })

}

module.exports = getSetLocation;