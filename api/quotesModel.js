const db = require('../data/dbConfig')

module.exports = {
  insert,
  update,
  remove,
  getAll,
  getById,
}

function getAll() {
  return db('quotes')
}

function getById(id) {
  return db('quotes').where('id', id).first()
}

async function insert(quote) {
  return await db('quotes').insert(quote).then(([id]) => {
    return db('quotes').where('id', id).first()
  })
}

async function update(id, changes) {
  return await db('quotes').insert(changes).where('id', id)
}

function remove(id) {
  return db('quotes').delete().where('id',id).first()
}