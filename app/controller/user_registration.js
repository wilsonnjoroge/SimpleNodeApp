
const User = require('../models/user_model')

// DOCTOR REGISTRATION
exports.registerUsers = async (req, res) => {
  
  const { fullName, email, password} = req.body;

  try {

    if (!fullName ||!email ||!password ) {
      return res.status(400).json("All fields are required");
    }
    
    // Check if the doctor is already registered
    const user = await User.findOne({ where: { email: email } });

    if (user) {
      return res.status(400).json('User already exists, Log in instead');
    }

    const newUser = new User({
      fullName,
      email,
      password
    });

    await newUser.save();

    res.status(201).json({ message: 'User registered successfully' });

  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
};
