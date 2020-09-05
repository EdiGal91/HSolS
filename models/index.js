const { connect } = require("mongoose");
const { MONGO_URL } = process.env;
exports.connect = async function () {
  try {
    await connect(MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true });
    return true;
  } catch (err) {
    console.error(err);
    return false;
  }
};
