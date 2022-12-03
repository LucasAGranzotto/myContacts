const { StatusCodes } = require('http-status-codes');
const CategoryRepository = require('../repositories/CategoryRepository');

class CategoryController {
  async #getCategoryById(id) {
    // TO-DO
  }

  async #getCategoryByName(name) {
    // TO-DO
  }

  #categoryNotExists(res, id) {
    // TO-DO
  }

  async index(req, res) {
    // TO-DO
  }

  async show(req, res) {
    // TO-DO
  }

  async store(req, res) {
    // TO-DO
  }

  async update(req, res) {
    // TO-DO
  }

  async delete(req, res) {
    // TO-DO
  }
}

// Singleton
module.exports = new CategoryController();
