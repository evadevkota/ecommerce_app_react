const express = require('express');
// importing user from user.js
const User = require('../models/User');
const router = express.Router();
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');
var fetchuser = require('../middleware/fetchuser');
const JWT_SECRET = 'Thisismyp@ssw$rd';

// User Registration
router.post('/createuser', [
  // User Validation
  body('name', 'Enter a valid name').isLength({ min: 3 }),
  body('email', 'Enter a valid email').isEmail(),
  body('password', 'Password must be at least 5 characters').isLength({ min: 5 }),
], async (req, res) => {
  try {
    // Check for validation errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    // Check if the user with this email already exists
    const existingUser = await User.findOne({ email: req.body.email });
    if (existingUser) {
      return res.status(400).json({ error: "A user with this email already exists" });
    }

    // Hash the password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);

    // Create a new user
    const newUser = await User.create({
      name: req.body.name,
      password: hashedPassword,
      email: req.body.email,
    });

    // Create a token
    const tokenPayload = {
      user: {
        id: newUser.id,
      },
    };
    const authtoken = jwt.sign(tokenPayload, JWT_SECRET);

    // Respond with the token
    res.status(201).json({ authtoken });
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
});

// User lOGIN
router.post('/login', [
  body('email', 'Enter a valid email').isEmail(),
  body('password', 'Password cannot be blank').exists(),
], async (req, res) => {
  let success = false;

  // If there are errors, return Bad request and the errors
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({success, errors: errors.array() });
  }

  const { email, password } = req.body;
  try {
    
    let user = await User.findOne({ email });
    // check whether user exist or not
    if (!user) {
      let success = false;
      return res.status(400).json({success, error: "Please try to login with correct credentials" });
    }

    const passwordCompare = await bcrypt.compare(password, user.password);
    // check whether the user password matcher or not
    if (!passwordCompare) {
      let success = false;
      return res.status(400).json({success, error: "Please try to login with correct credentials" });
    }

    const data = {
      user: {
        id: user.id
      }
    }
    // giving token for every user
    const authtoken = jwt.sign(data, JWT_SECRET);
    let success = true;
    res.json({ success,authtoken })
 
    console.log(authtoken)

  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }


});


//Get User details
router.post('/getuser', fetchuser,  async (req, res) => {

  try {
    userId = req.user.id;
    // finding user
    const user = await User.findById(userId).select("-password")
    res.send(user)
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
})
module.exports = router