const User = require("../models/users");

const index = (req, res) => {
  User.getAll((err, result) => {
    if (err) {
      return res.status(505).json({ error: err.message });
    }
    
    res.status(200).json(result);
  });
};
const store = (req, res) => {
  const { nis, nama, id_kelas, path } = req.body;
  User.store(nis, nama, id_kelas, path, (err, result) => {
    if (err) {
      return res.status(500).json({ err: err.message });
    }
 
    res.status(200).json({ message: "Kelas telah ditambahkan" });
  });
};
const update = (req, res) => {
  const { id } = req.params;
  const { nis, nama, id_kelas, path } = req.body;
  User.update(id, nis, nama, id_kelas, path, (err, result) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.status(200).json({ message: `Data telah diperbarui ${id}` });
  });
};

const destroy = (req, res) => {
  const { id } = req.params;
  User.destroy(id, (err, result) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.status(200).json({ message: `hapus kelas dengan id : ${id} berhasil` });
  });
};
module.exports = {
  index,
  store,
  update,
  destroy,
};
