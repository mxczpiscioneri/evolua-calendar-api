import models from '../models'

const Category = models.Category

module.exports = {
  getAll: function (req, res) {
    Category
      .findAll()
      .then((categories) => {
        if (!categories) {
          return res.status(404).json({ msg: 'Bad Request: Categories not found' })
        }
        res.status(200).json({ categories })
      })
      .catch((err) => {
        console.error(err);
        return res.status(500).json({ msg: 'Internal server error' })
      })
  },
  getById: function (req, res) {
    Category
      .findById(req.params.id)
      .then((category) => {
        if (!category) {
          return res.status(404).json({ msg: 'Bad Request: Category not found' })
        }
        res.status(200).json({ category })
      })
      .catch((err) => {
        console.error(err);
        return res.status(500).json({ msg: 'Internal server error' })
      })
  },
  create: function (req, res) {
    const name = req.body.name;

    Category
      .create({
        name: name
      })
      .then((category) => {
        if (!category) {
          return res.status(404).json({ msg: 'Bad Request: Category not found' });
        }

        return res.status(200).json({ category });
      })
      .catch((err) => {
        console.error(err);
        return res.status(500).json({ msg: 'Internal server error' });
      });
  },
  delete: function (req, res) {
    const id = req.params.id;

    Category
      .findById(id)
      .then((category) => {
        if (!category) {
          return res.status(404).json({ msg: 'Bad Request: Category not found' })
        }

        category.destroy()
          .then(() => {
            return res.status(200).json({ msg: 'Successfully destroyed category' });
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