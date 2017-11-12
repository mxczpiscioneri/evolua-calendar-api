import models from '../models'

const User = models.User

module.exports = {
  getAll: function (req, res) {
    User
      .findAll()
      .then((users) => {
        if (!users) {
          return res.status(404).json({ msg: 'Bad Request: Users not found' })
        }
        res.status(200).json({ users })
      })
      .catch((err) => {
        console.error(err);
        return res.status(500).json({ msg: 'Internal server error' })
      })
  },
  getById: function (req, res) {
    User
      .findById(req.params.id)
      .then((user) => {
        if (!user) {
          return res.status(404).json({ msg: 'Bad Request: User not found' })
        }
        res.status(200).json({ user })
      })
      .catch((err) => {
        console.error(err);
        return res.status(500).json({ msg: 'Internal server error' })
      })
  },
  create: function (req, res) {
    const name = req.body.name;
    const email = req.body.email;
    const password = req.body.password;

    User
      .create({
        name: name,
        email: email,
        password: password,
      })
      .then((user) => {
        if (!user) {
          return res.status(404).json({ msg: 'Bad Request: User not found' });
        }

        return res.status(200).json({ user });
      })
      .catch((err) => {
        console.error(err);
        return res.status(500).json({ msg: 'Internal server error' });
      });
  },
  delete: function (req, res) {
    const id = req.params.id;

    User
      .findById(id)
      .then((user) => {
        if (!user) {
          return res.status(404).json({ msg: 'Bad Request: User not found' })
        }

        user.destroy()
          .then(() => {
            return res.status(200).json({ msg: 'Successfully destroyed user' });
          }).catch((err) => {
            console.error(err);
            return res.status(500).json({ msg: 'Internal server error' });
          });
      })
      .catch((err) => {
        console.error(err);
        return res.status(500).json({ msg: 'Internal server error' })
      })
  }
}