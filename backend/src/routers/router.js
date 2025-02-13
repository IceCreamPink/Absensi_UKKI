const kelasControllers = require("../controllers/kelasControllers");
const userControllers = require("../controllers/userControllers");
const adminControllers = require("../controllers/adminControllers");
const express = require("express");
const router = express.Router();

// Siswa
router.get("/users", userControllers.index);
router.post("/users", userControllers.store);
router.put("/users/:id", userControllers.update);
router.delete("/users/:id", userControllers.destroy);

// Kelas
router.get("/kelas", kelasControllers.index);
router.post("/kelas", kelasControllers.store);
router.put("/kelas/:id", kelasControllers.update);
router.delete("/kelas/:id", kelasControllers.destroy);

// admin
router.get("/admin", adminControllers.index);
router.post("/admin", adminControllers.store);
router.put("/admin/:id", adminControllers.update);
router.delete("/admin/:id", adminControllers.destroy);
module.exports = router;
