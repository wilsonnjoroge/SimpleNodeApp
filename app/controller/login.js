const User = require('../models/user_model')

exports.logIn = async(req,res) => {

  const {email, password} = req.body;
  try {
    const user = await User.findOne({ where: { email: email } });

    if (!user) {
      return res.status(401).json({ message: 'Invalid credentials: user not found' });
    }

    if(password !== user.password) {
      return res.status(401).json({ message: 'Invalid credentials: wrong password' });
    }

    return  res.status(200).json({ message: 'login successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal server error' });
  }

}