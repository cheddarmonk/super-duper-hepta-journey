const express = require('express')
const bodyParser = require('body-parser')
const MongoClient = require('mongodb').MongoClient
const app = express()

// ========================
// Link to Database
// ========================

require('./dotenv')


const connectionString = "mongodb+srv://dbuser:dbuser@node-demo.byxq7.mongodb.net/node-demo?retryWrites=true&w=majority";

MongoClient.connect(connectionString, { useUnifiedTopology: true })
  .then(client => {
    console.log('Connected to Database')
    const db = client.db('occasion-tracker')
    const quotesCollection = db.collection('quotes')

    // ========================
    // Middlewares
    // ========================

    app.set('view engine', 'ejs')
    app.use(bodyParser.urlencoded({ extended: true }))
    app.use(bodyParser.json())
    app.use(express.static('public'))

    // ========================
    // Routes
    // ========================

    app.get('/', (req, res) => {
      console.log("Get INFO")
      db.collection('quotes').find().toArray()
        .then(quotes => {
          res.render('index.ejs', { quotes: quotes })
        })
        .catch(/* ... */)
        
    })

    app.post('/occasion', (req, res) => {
      console.log("Add TO DB")
      quotesCollection.insertOne(req.body)
        .then(result => {
          res.redirect('/')
        })
        .catch(error => console.error(error))
        
    })

    app.put('/occasion', (req, res) => {
      console.log("Update")
      quotesCollection.findOneAndUpdate(
        { name: 'Yoda' },
        {
          $set: {
            name: req.body.name,
            quote: req.body.quote
          }
        },
        {
          upsert: true
        }
      )
        .then(result => res.json('Success'))
        .catch(error => console.error(error))
        
    })

    app.delete('/quotes', (req, res) => {
      console.log("Start Delete")
      quotesCollection.deleteOne(
        { name: req.body.name }
      )
        .then(result => {
          if (result.deletedCount === 0) {
            console.log("nothing Found")
            return res.json('Cannot Find Entry')
          }
          console.log("5")
          res.json('Deleted Darth Vadar\'s quote')
        })
        .catch(error => console.error(error))
        
    })

    // ========================
    // Listen
    // ========================

    app.listen(process.env.PORT || 3000, function() {
      console.log('Listening on port 3000');
  });

  })
  .catch(console.error)
