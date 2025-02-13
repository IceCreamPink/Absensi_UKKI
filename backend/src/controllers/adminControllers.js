const admin = require("../models/admin");

const index = (req, res) => {
  admin.getAll((err, result) => {
    if (err) {
      return res.status(505).json({ error: err.message });
    }

    res.status(200).json(result);
  });
};
const store = (req, res) => {
  const { username, name, password, no_hp } = req.body;
  admin.store(username, name, password, no_hp, (err, result) => {
    if (err) {
      return res.status(500).json({ err: err.message });
    }
    // if(length===0){
    //     return res.status(404).status({message:"password harus diisi"})
    // }

    res
      .status(200)
      .json({ message: "Berhasil disimpan", userId: result.insertId });
  });
};
const update = (req, res) => {
  const { id } = req.params;
  const { username, name, password, no_hp } = req.body;
  admin.update(id, username, name, password, no_hp, (err, result) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.status(200).json({ message: `Data telah diperbarui ${id}` });
  });
};

const destroy = (req, res) => {
  const { id } = req.params;
  admin.destroy(id, (err, result) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.status(200).json({ message: `hapus admin dengan id : ${id} berhasil` });
  });
};
module.exports = {
  index,
  store,
  update,
  destroy,
};
