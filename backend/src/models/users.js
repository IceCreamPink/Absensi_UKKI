const koneksi = require("./server");

const getAll = (callback) => {
  const q = `select * from users`;
  koneksi.query(q, callback);
};

const store = (nis, nama, id_kelas, path, callback) => {
  const q = `insert into users(nis, nama, id_kelas, path) values(?,?,?,?)`;
  koneksi.query(q, [nis, nama, id_kelas, path], callback);
};

const update = (id, nis, nama, id_kelas, path, callback) => {
  const q = `update users set nis=? , nama=?, id_kelas=?, path=? where id=?`;
  koneksi.query(q, [nis, nama, id_kelas, path, id], callback);
};
const destroy = (id, callback) => {
  const q = `delete from users where id=?`;
  koneksi.query(q, [id], callback);
};
module.exports = { getAll, store, update, destroy };

//   nis VARCHAR(20) UNIQUE,
//     nama TEXT,
//     id_kelas VARCHAR(6),
//     path VARCHAR(259),
    