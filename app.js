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


let port = process.env.PORT;
if (port == "" || port == null) {
    port = 3000;
}

app.listen(port, function () {
    console.log("Server running on port : 3000 ");
});