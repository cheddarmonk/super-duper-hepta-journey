const express = require("express");
const app = express();
const port = 3000;
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
const MongoClient = require('mongodb').MongoClient;
const url = "mongodb+srv://dbuser:dbuser@node-demo.byxq7.mongodb.net/node-demo?retryWrites=true&w=majority";

MongoClient.connect(url, function(err, db) {
    const dbo = db.db("node-demo");
    dbo.collection("users").find({}).toArray(function(err, result) {
        app.get("/users", (req, res) => {
        res.send("/addname", { root: __dirname });
           
        });
      if (err) throw err;
      console.log(result);
      db.close();    
      
    });
  });

app.get("/add", (req, res) => {
    res.send('pages/add.html', { root: __dirname });
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

app.post("/pages/add.html", (req, res) => {
    var myData = new User(req.body);
    myData.save()
        .then(item => {
            res.send("Name saved to database");
        })
        .catch(err => {
            res.status(400).send("Unable to save to database");
        });
});



app.listen(process.env.PORT || 8888, function() {
    console.log('Listening on port 8888');
});