const db = require('../../database');

class CategoriesRepository {
  async findAll(orderBy = 'ASC') {
    // TO-DO
  }

  async findById(id) {
    // TO-DO
  }

  async findByName(name) {
    // TO-DO
  }

  async create({ name }) {
    // TO-DO
  }

  async update(id, { name }) {
    // TO-DO
  }

  async delete(id) {
    // TO-DO
  }
}

module.exports = new CategoriesRepository();
