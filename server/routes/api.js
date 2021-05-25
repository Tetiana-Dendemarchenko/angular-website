const express = require('express');
const jwt = require('jsonwebtoken');
const router = express.Router();
const User = require('../models/user');
const mongoose = require('mongoose');
const db = 'mongodb+srv://tetiana_dendemarchenko:123456789Tt@articlesdb.pr5zp.mongodb.net/articlesdb?retryWrites=true&w=majority';

mongoose.connect(db, ({useNewUrlParser: true, useUnifiedTopology: true}))
  .then(console.log("Connected  to MongoDB"))
  .catch(err => console.log(err))

function verifyToken(req, res, next) {
  if (!req.headers.authorization) {
    return res.status(401).send('Unauthorized request')
  }
  let token = req.headers.authorization.split(' ')[1]
  if (token === 'null') {
    return res.status(401).send('Unauthorized request');
  }
  let payload = jwt.verify(token, 'secretKey');
  if (!payload) {
    return res.status(401).send('Unauthorized request');
  }
  req.userId = payload.subject
  next()
}

router.get('/', (req, res) => {
  res.send('From API route')
})

router.post('/registration', (req, res) => {
  let userData = req.body;
  let user = new User(userData);
  user.save((error, registeredUser) => {
    if (error) {
      console.log(error)
    } else {
      let payload = {subject: registeredUser._id};
      let token = jwt.sign(payload, 'secretKey');
      res.status(200).send({token})
    }
  });
})

router.post('/login', (req, res) => {
  let userData = req.body;

  User.findOne({email: userData.email}, (error, user) => {
    if (error) {
      console.log(error)
    } else {
      if (!user) {
        res.status(401).send('Invalid email')
      } else if (user.password !== userData.password) {
        res.status(401).send('Invalid password')
      } else {
        let payload = {subject: user._id};
        let token = jwt.sign(payload, 'secretKey');
        res.status(200).send({token})
      }
    }
  })
})

router.get('/events', (req, res) => {
  let events = [
    {
      "_id": "1",
      "name": "Auto Expo",
      "description": "Lorem ipsum oioujcks aehfuawdv SKJFHSUDHIVU Sjkdfhshfuh",
      "date": "20-04-2020"
    },
    {
      "_id": "2",
      "name": "Auto Expo",
      "description": "Lorem ipsum oioujcks aehfuawdv SKJFHSUDHIVU Sjkdfhshfuh",
      "date": "20-04-2020"
    },
    {
      "_id": "3",
      "name": "Auto Expo",
      "description": "Lorem ipsum oioujcks aehfuawdv SKJFHSUDHIVU Sjkdfhshfuh",
      "date": "20-04-2020"
    },
    {
      "_id": "4",
      "name": "Auto Expo",
      "description": "Lorem ipsum oioujcks aehfuawdv SKJFHSUDHIVU Sjkdfhshfuh",
      "date": "20-04-2020"
    },
    {
      "_id": "5",
      "name": "Auto Expo",
      "description": "Lorem ipsum oioujcks aehfuawdv SKJFHSUDHIVU Sjkdfhshfuh",
      "date": "20-04-2020"
    },
    {
      "_id": "6",
      "name": "Auto Expo",
      "description": "Lorem ipsum oioujcks aehfuawdv SKJFHSUDHIVU Sjkdfhshfuh",
      "date": "20-04-2020"
    }
  ]
  res.json(events);
})

router.get('/special', verifyToken, (req, res) => {
  let specialEvents = [
    {
      "_id": "1",
      "name": "Auto",
      "description": "Special ipsum oioujcks aehfuawdv SKJFHSUDHIVU Sjkdfhshfuh",
      "date": "20-04-2020"
    },
    {
      "_id": "2",
      "name": "Auto",
      "description": "Special ipsum oioujcks aehfuawdv SKJFHSUDHIVU Sjkdfhshfuh",
      "date": "20-04-2020"
    },
    {
      "_id": "3",
      "name": "Auto ",
      "description": "Special ipsum oioujcks aehfuawdv SKJFHSUDHIVU Sjkdfhshfuh",
      "date": "20-04-2020"
    },
    {
      "_id": "4",
      "name": "Auto",
      "description": "Special ipsum oioujcks aehfuawdv SKJFHSUDHIVU Sjkdfhshfuh",
      "date": "20-04-2020"
    },
    {
      "_id": "5",
      "name": "Auto",
      "description": "Special ipsum oioujcks aehfuawdv SKJFHSUDHIVU Sjkdfhshfuh",
      "date": "20-04-2020"
    },
    {
      "_id": "6",
      "name": "Auto",
      "description": "Special ipsum oioujcks aehfuawdv SKJFHSUDHIVU Sjkdfhshfuh",
      "date": "20-04-2020"
    }
  ]
  res.json(specialEvents);
})

module.exports = router;
