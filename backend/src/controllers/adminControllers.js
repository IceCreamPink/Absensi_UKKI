const admin = require("../models/admin");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const index = (req, res) => {
  admin.getAll((err, result) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    if (result.length === 0) {
      return res.status(404).json({ message: "Admin Kosong" });
    }
    res.status(200).json(result);
  });
};
const getId = (req, res) => {
  const { id } = req.params;
  admin.getId(id, (err, result) => {
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
const login = (req, res) => {
  const { username, password } = req.body;
  console.log(password);

  admin.getUsername(username, (err, result) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    if (result === 0) {
      return res.status(400).json({ message: "username Tidak Ditemukan" });
    }

    const admin = result[0];
    const passwordValid = bcrypt.compareSync(password, admin.password);

    if (!passwordValid) {
      return res.status(401).json({ message: "Password Keliru" });
    }

    const token = jwt.sign({ id: admin.id }, "semesterancuyy", {
      expiresIn: 86400,
    });
    res.status(200).json({ auth: true, token });
  });
};

// Status LogOut
const logout = (req, res) => {
  res.status(200).json({ auth: false, token: null });
};
module.exports = {
  index,
  getId,
  store,
  update,
  destroy,
  login,
  logout,
};
