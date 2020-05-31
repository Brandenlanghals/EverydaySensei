// *****************************************************************************
// Server.js - This file is the initial starting point for the Node/Express server.
//
// ******************************************************************************
// *** Dependencies
// =============================================================
var express = require("express");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 8080;
var path = require("path");

//Controller Variables
var senseiController = require("./controller/senseiController");
// var senseiStudentJoinTableController = require("./controller/senseiStudentJoinTableController");
// var skillController = require("./controller/skillController");
var studentController = require("./controller/studentController");

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Set Handlebars
var exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Requiring our models for syncing
var db = require("./models/sensei");

// Static directory
app.use("/public", express.static(path.join(__dirname, 'public')));

// Routes
// =============================================================
require("./routes/html-routes")(app);
app.use("/", senseiController);
// app.use("/", senseiStudentJoinTableController);
// app.use("/", skillController);
app.use("/", studentController);

// Syncing our sequelize models and then starting our Express app
// =============================================================
db.sequelize.sync({ force: false }).then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});
