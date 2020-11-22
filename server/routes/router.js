const express = require('express');
const router = express.Router();

const db = require('../config/db');

// GET the entire data from MySQL
router.get('/all', (req, res, next) => {

  db.query('SELECT * FROM users', (err, results) => {
    if(err) throw err;
    else {
      res.json({success: true, msg: 'All the users!', results: results});
    }
  });

});

// POST route for adding a new user
router.post('/add', (req, res, next) => {

  let newUser = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    avatar: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png'
  };

  db.query('INSERT INTO users SET ?', newUser, (err) => {
    if(err) throw err;
    else {
      res.json({success: true, msg: 'Added a new user!'});
      console.log('Added a new user!');
    }
  });

});

// POST for adding a new friend
router.post('/add/friend', (req, res, next) => {

  let newFriend = {
    user_one_id: req.body.user_one_id,
    user_two_id: req.body.user_two_id
  };

  db.query('INSERT INTO relation SET ?', newFriend, (err) => {
    if(err) throw err; 
    else {
      res.json({success: true, msg: 'Added friend!'});
      console.log('Added friend!');
    }
  });

});

// POST request to get all the friends of a user
router.post('/:id/friend', (req, res, next) => {
  
  let sql = 'SELECT * FROM (SELECT user_two_id FROM relation WHERE user_one_id=' + req.body.user_id 
  + ') r JOIN users ON r.user_two_id=users.user_id';
  db.query(sql, (err, results, fields) => {
    if(err) throw err;
    else {
      res.json(results);
    }
  })
});

module.exports = router;