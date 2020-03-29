"use strict";

require("dotenv").config();
const express = require("express");
const app = express();
const db = require("./database/db");
const stationRoute = require("./routes/stationRoute");
const connectionRoute = require("./routes/connectionRoute");
const connectionTypeRoute = require("./routes/connectionTypeRoute");
const currentTypeRoute = require("./routes/currentTypeRoute");
const levelRoute = require("./routes/levelRoute");

app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing applicatio/x-www-form-urlencoded

app.use("/station", stationRoute);
app.use("/connection", connectionRoute);
app.use("/connectionType", connectionTypeRoute);
app.use("/currentType", currentTypeRoute);
app.use("/level", levelRoute);

db.on("connected", () => {
  app.listen(3000);
});
