
// // const vehicleModel = require("../models/vehicle_model");
// const firebaseRef=require("../utils/firebase");

// const onUpdateLocation = (req, res, next) => {

//     firebaseRef.on("child_changed", function (snapshot) {
//         console.log("firebase" + snapshot.val());
//         res.redirect("/dashboard/set_location/"+req.params.id);
//     });

// }

// module.exports = getDashboard;