const Absensi = require("../models/absensi");

const index = (req, res) => {
  Absensi.getAll((err, result) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    if (result.length === 0) {
      return res.status(404).json({ message: "Absensi Kosong" });
    }
    res.status(200).json(result);
  });
};
const getId = (req, res) => {
  const { id } = req.params;
  Absensi.getId(id, (err, result) => {
    if (err) {
      return res.status(505).json({ error: err.message });
    }

    res.status(200).json(result);
  });
};
const store = (req, res) => {
  const { id_siswa, waktu, lokasi, status, foto_absensi } = req.body;
  Absensi.store(
    id_siswa,
    waktu,
    lokasi,
    status,
    foto_absensi,
    (err, result) => {
      if (err) {
        return res.status(500).json({ err: err.message });
      }
      // if(length===0){
      //     return res.status(404).status({message:"password harus diisi"})
      // }

      res
        .status(200)
        .json({ message: "Berhasil disimpan", userId: result.insertId });
    }
  );
};

const destroy = (req, res) => {
  const { id } = req.params;
  Absensi.destroy(id, (err, result) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res
      .status(200)
      .json({ message: `hapus Absensi dengan id : ${id} berhasil` });
  });
};
module.exports = {
  index,
  getId,
  store,
  destroy,
};
