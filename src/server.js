const express = require("express");
const app = express();
const path = require("path");
const exphbs = require("express-handlebars");
const morgan = require("morgan");

//settings
app.set("port", process.env.PORT || 3000);
app.set("views", path.join(__dirname, "views"));
app.engine(
  ".hbs",
  exphbs({
    layoutsDir: path.join(app.get("views"), "layouts"),
    partialsDir: path.join(app.get("views"), "partials"),
    defaultLayout: "main",
    extname: ".hbs",
  })
);
app.set("view engine", ".hbs");

//middlewares
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//routes
app.use(require("./routes/indexRoutes"));

//static files

module.exports = app;
