// import mongoose library
const mongoose = require("mongoose");

// export arrow function for server.js
module.exports = (DB) => {
  // mongoose promise
  mongoose
    .connect(`mongodb://localhost/${DB}`)
    .then(() => console.log(`connected to ${DB}`))
    .catch((err) => console.log(`cannot connect to ${DB}`, err));
};
