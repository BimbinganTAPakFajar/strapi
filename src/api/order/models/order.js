module.exports = {
  attributes: {
    id: {
      type: "uuid",
      uuidv4: true, // Use version 4 UUIDs
      required: true,
      unique: true,
    },
    // ...
  },
};
