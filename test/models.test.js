const chai = require('chai')
const expect = chai.expect

const { User, Category, CalendarEvent } = require('../src/models')

const name = 'Matheus Piscioneri'
const email = 'mxczpiscioneri@gmail.com'
const password = '123pin'
const category = 'Job'
const description = 'Final job submission'
const date = '2017-11-13T20:49:14.121Z'
const category_id = 1
const user_id = 1


describe('User model', () => {
  describe('save and findById', () => {
    it('works', () => {

      User
        .create({
          name: name,
          email: email,
          password: password
        })
        .then((createdUser) => {
          expect(createdUser.name).to.equal(name)
          expect(createdUser.email).to.equal(email)
          expect(createdUser.password).to.equal(password)

          User
            .findById(createdUser.id)
            .then((foundUser) => {
              expect(foundUser.name).to.equal(name)
              expect(foundUser.email).to.equal(email)
              expect(foundUser.password).to.equal(password)
              expect(foundUser.id).to.equal(createdUser.id)
            })
            .catch((err) => {
              console.error(err)
            })
        })
        .catch((err) => {
          console.error(err)
        })
    })
  })
})

describe('Category model', () => {
  describe('save and findById', () => {
    it('works', () => {

      Category
        .create({
          name: category,
        })
        .then((createdCategory) => {
          expect(createdCategory.name).to.equal(category)

          Category
            .findById(createdCategory.id)
            .then((foundCategory) => {
              expect(foundCategory.name).to.equal(category)
              expect(foundCategory.id).to.equal(createdCategory.id)
            })
            .catch((err) => {
              console.error(err)
            })
        })
        .catch((err) => {
          console.error(err)
        })
    })
  })
})

describe('CalendarEvent model', () => {
  describe('save and findById', () => {
    it('works', () => {

      CalendarEvent
        .create({
          description: description,
          date: date,
          category_id: category_id,
          user_id: user_id,
        })
        .then((createdEvent) => {
          expect(createdEvent.description).to.equal(description)
          expect(createdEvent.category_id).to.equal(category_id)
          expect(createdEvent.user_id).to.equal(user_id)

          CalendarEvent
            .findById(createdEvent.id)
            .then((foundEvent) => {
              expect(foundEvent.description).to.equal(description)
              expect(foundEvent.category_id).to.equal(category_id)
              expect(foundEvent.user_id).to.equal(user_id)
              expect(foundEvent.id).to.equal(createdEvent.id)
            })
            .catch((err) => {
              console.error(err)
            })
        })
        .catch((err) => {
          console.error(err)
        })
    })
  })
})