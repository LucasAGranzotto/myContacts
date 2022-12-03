/* eslint-disable camelcase */
const { StatusCodes } = require('http-status-codes');
const ContactsRepository = require('../repositories/ContactsRepository');
const checkValidUUID = require('../utils/checkValidUUID');

class ContactController {
  async #getContactById(id) {
    const contact = await ContactsRepository.findById(id);
    return contact;
  }

  async #getContactByEmail(email) {
    const contact = await ContactsRepository.findByEmail(email);
    return contact;
  }

  #contactNotExists(res, id) {
    res.status(StatusCodes.NOT_FOUND).json({
      errors: [
        {
          value: id,
          msg: 'Contact not found',
        },
      ],
    });
  }

  #emailAlreadyExists(res, email) {
    res.status(StatusCodes.BAD_REQUEST).json({
      errors: [
        {
          value: email,
          msg: 'This e-mail is already in use',
        },
      ],
    });
  }

  async index(req, res) {
    // listar todos os registros
    const { orderBy } = req.query;
    const contacts = await ContactsRepository.findAll(orderBy);
    res.json(contacts);
  }

  async show(req, res) {
    // listar um registro
    const { id } = req.params;

    if (!checkValidUUID(id)) {
      return this.#contactNotExists(res, id);
    }

    const contact = await this.#getContactById(id, res);

    if (!contact) {
      return this.#contactNotExists(res, id);
    }

    res.json(contact);
  }

  async store(req, res) {
    // criar um registro
    const {
      name, email, phone, category_id,
    } = req.body;

    const contact = await this.#getContactByEmail(email);

    if (contact) {
      return this.#emailAlreadyExists(res, email);
    }

    const newContact = await ContactsRepository.create({
      name,
      email,
      phone,
      category_id,
    });

    res.json(newContact);
  }

  async update(req, res) {
    // atualizar um registro
    const { id } = req.params;

    if (!checkValidUUID(id)) {
      return this.#contactNotExists(res, id);
    }

    const {
      name, email, phone, category_id,
    } = req.body;

    const contactById = await this.#getContactById(id, res);
    const contactByEmail = await this.#getContactByEmail(email, res);

    if (!contactById) {
      return this.#contactNotExists(res, id);
    }

    if (contactByEmail) {
      if (contactById.id !== contactByEmail.id) {
        return this.#emailAlreadyExists(res, email);
      }
    }

    const contact = await ContactsRepository.update(id, {
      name,
      email,
      phone,
      category_id,
    });

    res.json(contact);
  }

  async delete(req, res) {
    // excluir um registro
    const { id } = req.params;

    if (!checkValidUUID(id)) {
      return res.sendStatus(StatusCodes.NO_CONTENT);
    }

    await ContactsRepository.delete(id);
    res.sendStatus(StatusCodes.NO_CONTENT);
  }
}

// Singleton
module.exports = new ContactController();
