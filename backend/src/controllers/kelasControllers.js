const Kelas = require("../models/kelas");

const index = (req, res) => {
  Kelas.getAll((err, result) => {
    if (err) {
      return res.status(505).json({ error: err.message });
    }

    res.status(200).json(result);
  });
};
const store = (req, res) => {
  const { kelas, nama_wali, tahun } = req.body;
  Kelas.store(kelas, nama_wali, tahun, (err, result) => {
    if (err) {
      return res.status(500).json({ err: err.message });
    }

    res.status(200).json({ message: "Kelas telah ditambahkan" });
  });
};
const update = (req, res) => {
  const { id } = req.params;
  const { kelas, nama_wali, tahun } = req.body;
  Kelas.update(id, kelas, nama_wali, tahun, (err, result) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.status(200).json({ message: `Data telah diperbarui ${id}` });
  });
};

const destroy = (req, res) => {
  const { id } = req.params;
  Kelas.destroy(id, (err, result) => {
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
