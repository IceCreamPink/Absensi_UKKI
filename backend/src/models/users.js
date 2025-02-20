const koneksi = require("../config/server");
const bcrypt = require("bcryptjs");

const getAll = (callback) => {
  const q = `select * from users`;
  koneksi.query(q, callback);
};
const getId = (id, callback) => {
  const q = `select * from users`;
  koneksi.query(q, [id], callback);
};
const getNis = (nis, callback) => {
  const q = `select * from users where nis=?`;
  koneksi.query(q, [nis], callback);
};

const store = (nis, nama, password, id_kelas, path, callback) => {
  const hashedpassword = bcrypt.hashSync(password, 10);
  const q = `insert into users(nis, nama,password, id_kelas, path) values(?,?,?,?,?)`;
  koneksi.query(q, [nis, nama, hashedpassword, id_kelas, path], callback);
};

const update = (id, nis, nama, password, id_kelas, path, callback) => {
  const hashedpassword = bcrypt.hashSync(password, 10);
  if (password) {
    const q = `update users set nis=? , nama=?, password=?, id_kelas=?, path=? where id=?`;
    koneksi.query(q, [nis, nama, hashedpassword, id_kelas, path, id], callback);
  } else {
    const q = `update users set nis=? , nama=?, id_kelas=?,path=?, where id=?`;
    koneksi.query(q, [nis, nama, id_kelas, path, id], callback);
  }
};
const destroy = (id, callback) => {
  const q = `delete from users where id=?`;
  koneksi.query(q, [id], callback);
};

module.exports = { getAll, getId, getNis, store, update, destroy };

//   nis VARCHAR(20) UNIQUE,
//     nama TEXT,
//     id_kelas VARCHAR(6),
//     path VARCHAR(259),
