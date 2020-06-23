const http = require("http");

const express = require("express");
const bodyParser = require("body-parser");
const mongoConnect = require("./utils/database").mongoClient;

const dashboardRouter = require("./routes/dashboard_route");
const vehicleLocationRouter = require("./routes/vehicle_location_route");

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/dashboard", dashboardRouter);
app.use("/dashboard/vehicle_location", vehicleLocationRouter);

const server = http.createServer(app);

mongoConnect(() => {
    server.listen(3000, () => {
        console.log("Server running at 4000");
    });
});