if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}
const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");

const app = express();

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));


app.get("/", (req, res) => {
    res.render("index");
});

app.get("/portfolio-details", (req, res) => {
    res.render("portfolio-details");
});

app.get("/inner-page", (req, res) => {
    res.render("inner-page");
});

const PORT = 3000 || process.env.PORT;
app.listen(PORT, function () {
    console.log("Server running on port " + PORT);
});