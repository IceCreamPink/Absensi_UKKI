const koneksi = require("./server");

const getAll = (callback) => {
  const q = `select * from kelas`;
  koneksi.query(q, callback);
};

const store = (kelas, nama_wali, tahun, callback) => {
  const q = `insert into kelas(kelas, nama_wali, tahun) values(?,?,?)`;
  koneksi.query(q, [kelas, nama_wali, tahun], callback);
};

const update = (id, kelas, nama_wali, tahun, callback) => {
  const q = `update kelas set kelas=?, nama_wali=?, tahun=? where id=?`;
  koneksi.query(q, [kelas, nama_wali, tahun, id], callback);
};
const destroy = (id, callback) => {
  const q = `delete from kelas where id=?`;
  koneksi.query(q, [id], callback);
};
module.exports = { getAll, store, update, destroy };
