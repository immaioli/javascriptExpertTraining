const { describe, it, after, before } = require('mocha')
const supertest = require('supertest')
const assert = require('assert')
const app = require('./api')

describe('API Suite test', () => {
  let server

// starts the server before the tests
  before((done) => {
    server = app.listen(3000, done)
  })

// closes the server after the tests
  after((done) => {
    server.close(done)
  })

  describe('/contact:get', () => {
    it('should request the contact route and return HTTP Status 200', async () => {
      const response = await supertest(server)
        .get('/contact')
        .expect(200)

      assert.strictEqual(response.text, 'contact us page')
    })
  })

  describe('/login:post', () => {
    it('should request the login and return HTTP Status 200', async () => {
      const response = await supertest(server)
        .post('/login')
        .send({ username: "immaioli", password: "123" })
        .expect(200)

      assert.strictEqual(response.text, 'Log in succeeded!')
    })

    it('should request the login and return HTTP Status 401', async () => {
      const response = await supertest(server)
        .post('/login')
        .send({ username: "imarcelomaioli", password: "123" })
        .expect(401)

      assert.ok(response.unauthorized)
      assert.strictEqual(response.text, 'Log in failed!')
    })
  })

  describe('/hi:get - 404', () => {
    it('should request and existing page and return HTTP Status 404', async () => {
      const response = await supertest(server)
        .get('/hi')
        .expect(404)

      assert.strictEqual(response.text, 'not found!')
    })
  })
})
