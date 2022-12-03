const { StatusCodes } = require('http-status-codes');
const CategoriesRepository = require('../repositories/CategoriesRepository');

class CategoryController {
  async #getCategoryById(id) {
    const contact = await CategoriesRepository.findById(id);
    return contact;
  }

  async #getCategoryByName(name) {
    const contact = await CategoriesRepository.findByName(name);
    return contact;
  }

  #categoryNotExists(res, id) {
    res.status(StatusCodes.NOT_FOUND).json({
      errors: [
        {
          value: id,
          msg: 'Category not found',
        },
      ],
    });
  }

  #categoryAlreadyExists(res, name) {
    res.status(StatusCodes.BAD_REQUEST).json({
      errors: [
        {
          value: name,
          msg: 'This category already exists',
        },
      ],
    });
  }

  async index(req, res) {
    const { orderBy } = req.query;
    const contacts = await CategoriesRepository.findAll(orderBy);
    res.json(contacts);
  }

  async show(req, res) {
    // listar um registro
    const { id } = req.params;

    const contact = await this.#getCategoryById(id, res);

    if (!contact) {
      return this.#categoryNotExists(res, id);
    }

    res.json(contact);
  }

  async store(req, res) {
    // criar um registro
    const { name } = req.body;

    const contact = await this.#getCategoryByName(name);

    if (contact) {
      return this.#categoryAlreadyExists(res, name);
    }

    const newContact = await CategoriesRepository.create({ name });

    res.json(newContact);
  }

  async update(req, res) {
    // atualizar um registro
    const { id } = req.params;

    const { name } = req.body;

    const categoryById = await this.#getCategoryById(id, res);
    const categoryByName = await this.#getCategoryByName(name, res);

    if (!categoryById) {
      return this.#categoryNotExists(res, id);
    }

    if (categoryByName) {
      if (categoryById.id !== categoryByName.id) {
        return this.#categoryAlreadyExists(res, name);
      }
    }

    const category = await CategoriesRepository.update(id, { name });

    res.json(category);
  }

  async delete(req, res) {
    // excluir um registro
    const { id } = req.params;

    await CategoriesRepository.delete(id);
    res.sendStatus(StatusCodes.NO_CONTENT);
  }
}

// Singleton
module.exports = new CategoryController();
