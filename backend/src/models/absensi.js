const koneksi = require("../config/server");

const getAll = (callback) => {
  const q = `SELECT *, TIME(create_at) AS jam_absensi FROM absensi`;
  koneksi.query(q, callback);
};

const store = (id_siswa, waktu, lokasi, status, foto_absensi, callback) => {
  const q = `insert into absensi(id_siswa, waktu, lokasi, status, foto_absensi) values(?,?,?,?,?)`;
  koneksi.query(q, [id_siswa, waktu, lokasi, status, foto_absensi], callback);
};

const destroy = (id, callback) => {
  const q = `delete from absensi where id=?`;
  koneksi.query(q, [id], callback);
};
module.exports = { getAll, store, destroy };
