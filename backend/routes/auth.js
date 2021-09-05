const express = require('express');
const router = express.Router();
const User = require('../models/User')
const { body, validationResult } = require('express-validator');

//Create a User using: POST "/api/auth" Not Required Auth
router.post('/',[
    body('name', 'Please Enter Valid Name').isLength({ min: 3 }),
    body('email', 'Please Enter Valid Email').isEmail(),
    body('password', 'Password Should Contain Atleast 5 Characters').isLength({ min: 5 }),
], (req, res) => {

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    User.create({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
      }).then(user => res.json(user))
      .catch(err=> {console.log(err);
        res.json({error: 'Please Enter Unique Email Value', message: err.message})
    })

})

module.exports = router