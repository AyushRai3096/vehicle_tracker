const getDb = require("../utils/database").getDb;
const mongoDb = require("mongodb");

const objectId = mongoDb.ObjectID;

class Vehicle {
    constructor(vehicleNumber, latitude, longitude) {
        this.vehicle_id = new objectId();
        this.vehicleNumber = vehicleNumber;
        this.latitude = latitude;
        this.longitude = longitude;
    }

    // saveVehicle() {
    //     const db = getDb();

    //     return db.collection("vehicles").insertOne(this).then((result) => {
    //         console.log(result);
    //         return result;
    //         //here equate the object id
    //     }).catch((err) => {
    //         console.log(err);
    //     });
    // }

    static fetchLocation(vehicleId) {
        const db = getDb();
        return db.collection("vehicles").findOne({ _id: new objectId(vehicleId) }).then((result) => {
            console.log(result);
            const latLng = { lat: result.latitude, lng: result.longitude };
            return latLng;
        }).catch((err) => {
            console.log(err);
        });
    }

    static updateLocation(vehicleId, newLatittude, newLongitude) {
        const db = getDb();
        return db.collection("vehicles").updateOne({ _id: new objectId(vehicleId) }, { $set: { latitude: newLatittude, longitude: newLongitude } }).then((result) => {
            console.log(result);
        }).catch((err) => {
            console.log(err);
        });
    }

    static fetchAllVehicles() {
        const db = getDb();

        return db.collection("vehicles").find({}).toArray().then((result) => {
            console.log(result);
            return result;
        }).catch((err) => {
            console.log(err);
        })
    }
}

module.exports = Vehicle;