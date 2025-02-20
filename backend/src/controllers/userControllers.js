const multer = require("multer");
const path = require("path");
const User = require("../models/users");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// Konfigurasi penyimpanan file dengan multer
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "src/files/"); // Simpan file di folder ini
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage: storage });

// Ambil semua user
const index = (req, res) => {
  User.getAll((err, result) => {
    if (err) return res.status(500).json({ message: err.message });
    if (result.length === 0)
      return res.status(404).json({ message: "File tidak ditemukan" });
    res.status(200).json(result);
  });
};

// Simpan user baru dengan file upload
const storeUser = (req, res) => {
  const { nis, nama, password, id_kelas } = req.body;
  if (!req.file)
    return res.status(400).json({ message: "Foto tidak boleh kosong" });

  User.store(nis, nama, password, id_kelas, req.file.filename, (err) => {
    if (err) return res.status(500).json({ message: err.message });
    res.status(201).json({ message: "Upload berhasil" });
  });
};

// Edit user dengan atau tanpa upload foto baru
const editUser = (req, res) => {
  const { id } = req.params;
  const { nis, nama, id_kelas, path } = req.body;
  const foto = req.file ? req.file.filename : path;

  User.update(id, nis, nama, id_kelas, foto, (err) => {
    if (err) return res.status(500).json({ message: err.message });
    res.status(200).json({ message: "Update berhasil" });
  });
};

// Hapus user
const destroyUser = (req, res) => {
  const { id } = req.params;
  User.destroy(id, (err) => {
    if (err) return res.status(500).json({ message: err.message });
    res.status(200).json({ message: `Hapus data dengan ID: ${id} berhasil` });
  });
};
const login = (req, res) => {
  const { nis, password } = req.body;
  console.log(password);

  User.getNis(nis, (err, result) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    if (result === 0) {
      return res.status(400).json({ message: "nis Tidak Ditemukan" });
    }

    const users = result[0];
    const passwordValid = bcrypt.compareSync(password, users.password);

    if (!passwordValid) {
      return res.status(401).json({ message: "Password Keliru" });
    }

    const token = jwt.sign({ id: users.id }, "semesterancuyy", {
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
  storeUser,
  upload,
  editUser,
  destroyUser,
  login,
  logout,
};
