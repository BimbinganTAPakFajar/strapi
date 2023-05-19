const { v4: uuidv4 } = require("uuid");

module.exports = {
  beforeCreate(event) {
    console.log("INSIDE HOOK NGENTOT");
    const { data, where, select, populate } = event.params;
    data.uuid = uuidv4();
  },
};
