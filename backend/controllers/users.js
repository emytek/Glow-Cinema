const User = require('../models/user')

exports.create = async (req, res) => {
  const { name, email, password } = req.body

  const oldUser = await User.findOne({ email });

  if (oldUser) return res.status(401).json({ error: "This email is already in use!" });

  const newUser = new User({ name, email, password })
  await newUser.save()

  // Email verification
// var transport = nodemailer.createTransport({
//     host: "sandbox.smtp.mailtrap.io",
//     port: 2525,
//     auth: {
//       user: "f0bbd3d291138b",
//       pass: "********09df"
//     }
//   });

  res.status(201).json({ user: newUser })
};
