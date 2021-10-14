var express = require("express");
var app = express();
var port = 3000;
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

var mongoose = require("mongoose");
mongoose.Promise = global.Promise;
mongoose.Promise = global.Promise;
mongoose.connect("mongodb+srv://dbuser:dbuser@node-demo.byxq7.mongodb.net/node-demo?retryWrites=true&w=majority");
var nameSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    email: String,
    phonenbr: String,
    gender: String
});
var User = mongoose.model("User", nameSchema);

app.get("/", (req, res) => {
    res.sendFile('index.html', { root: __dirname });
});

app.get("/add", (req, res) => {
    res.sendFile('pages/add.html', { root: __dirname });
});

app.get("/home", (req, res) => {
    res.sendFile('index.html', { root: __dirname });
});

app.get("/delete", (req, res) => {
    res.sendFile('pages/delete.html', { root: __dirname });
});

app.get("/index", (req, res) => {
    res.sendFile('index.html', { root: __dirname });
});

app.post("/addname", (req, res) => {
    var myData = new User(req.body);
    myData.save()
        .then(item => {
            res.send("Name saved to database");
        })
        .catch(err => {
            res.status(400).send("Unable to save to database");
        });
});

app.put("/addname", (req, res) => {
    var myData = new User(req.body);
    myData.save()
        .then(item => {
            res.send("Name updated in database");
        })
        .catch(err => {
            res.status(400).send("Unable to update database");
        });
});

app.listen(process.env.PORT || 8888, function() {
    console.log('Listening on port 8888');
});