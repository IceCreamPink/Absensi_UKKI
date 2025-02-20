// const db = require("../config/server");

// const School = {
//   getSchool: (callback) => {
//     const query = "SELECT * FROM schools WHERE id = 1";
//     db.query(query, callback);
//   },
// };
const koneksi = require("../config/server");

const sekolah = (callback) => {
  const q = `SELECT * FROM schools WHERE id = 1`;
  koneksi.query(q, callback);
};

module.exports = { sekolah };
