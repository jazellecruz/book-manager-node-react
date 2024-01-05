const bcrypt = require("bcrypt");
const { connection } = require("../database/db");

const authenticateUser = async (username, password) => {
  let results = await connection.promise().query(
    `SELECT password FROM users WHERE username = "${username}";`
  );

  if(!results[0].length) return false;

  let match = await bcrypt.compare(password, results[0][0].password);
  return match;
}


module.exports = {authenticateUser}