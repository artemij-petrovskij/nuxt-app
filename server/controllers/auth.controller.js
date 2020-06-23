const bcrypt = require('bcrypt-nodejs')
const jwt = require('jsonwebtoken')
const keys = require('../keys')
const User = require('../models/user.model')

module.exports.login = async (req, res) => {
  const candidate = await User.findOne({ login: req.body.login })
  if (candidate) {
    const isPassCorrect = bcrypt.compareSync(req.body.password, candidate.password)

    if (isPassCorrect) {
      const token = jwt.sign({
        login: candidate.login,
        userId: candidate._id
      }, keys.JWT, { expiresIn: 60 * 60 })
      res.json({ token })
    } else {
      res.status(404).json({ message: 'Проверьте имя пользователя или пароль' })
    }

  } else {
    res.status(404).json({ message: 'Проверьте имя пользователя или пароль' })

  }

}

module.exports.createUser = (req, res) => {

}
