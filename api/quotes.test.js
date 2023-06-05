const request = require('supertest')
const db = require('../data/dbConfig')
const server = require('./server')

it('correct env environment', () => {
    expect(process.env.NODE_ENV).toBe('testing')
})