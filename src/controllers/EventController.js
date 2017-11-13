import models from '../models'

const CalendarEvent = models.CalendarEvent

module.exports = {
  getAll: function (req, res) {
    CalendarEvent
      .findAll()
      .then((events) => {
        if (!events) {
          return res.status(404).json({ msg: 'Bad Request: Events not found' })
        }
        res.status(200).json({ events })
      })
      .catch((err) => {
        console.error(err);
        return res.status(500).json({ msg: 'Internal server error' })
      })
  },
  getById: function (req, res) {
    CalendarEvent
      .findById(req.params.id)
      .then((event) => {
        if (!event) {
          return res.status(404).json({ msg: 'Bad Request: Event not found' })
        }
        res.status(200).json({ event })
      })
      .catch((err) => {
        console.error(err);
        return res.status(500).json({ msg: 'Internal server error' })
      })
  },
  create: function (req, res) {
    const description = req.body.description;
    const date = req.body.date;
    const category_id = req.body.category_id;
    const user_id = req.body.user_id;

    CalendarEvent
      .create({
        description: description,
        date: date,
        category_id: category_id,
        user_id: user_id
      })
      .then((event) => {
        if (!event) {
          return res.status(404).json({ msg: 'Bad Request: Event not found' });
        }

        return res.status(200).json({ event });
      })
      .catch((err) => {
        console.error(err);
        return res.status(500).json({ msg: 'Internal server error' });
      });
  },
  delete: function (req, res) {
    const id = req.params.id;

    CalendarEvent
      .findById(id)
      .then((event) => {
        if (!event) {
          return res.status(404).json({ msg: 'Bad Request: Event not found' })
        }

        event.destroy()
          .then(() => {
            return res.status(200).json({ msg: 'Successfully destroyed event' });
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