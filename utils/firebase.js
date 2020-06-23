var admin = require("firebase-admin");

// Fetch the service account key JSON file contents
var serviceAccount = require("../vehicletracker-36a48-firebase-adminsdk-4vquc-f5fada8a25.json");

// Initialize the app with a custom auth variable, limiting the server's access
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://vehicletracker-36a48.firebaseio.com/",
    //   databaseAuthVariableOverride: {
    //     uid: "my-service-worker"
    //   }
});

// The app only has access as defined in the Security Rules
var db = admin.database();
var ref = db.ref("/locations");

module.exports = ref;