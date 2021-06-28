var express = require("express");
const {RouteCalculadora, RoutePing} = require("../routes");
var bodyParser = require("body-parser");

var app = express();

app.use(bodyParser.json());

app.use("/",RouteCalculadora);
app.use("/",RoutePing);

app.listen(8000);