const { v4: uuidv4 } = require('uuid');

function checkValidUUID(id) {
  const validUUID = uuidv4(id).toString();

  return id === validUUID;
}

module.exports = checkValidUUID;
