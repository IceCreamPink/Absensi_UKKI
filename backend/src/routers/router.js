const kelasControllers = require("../controllers/kelasControllers");
const userControllers = require("../controllers/userControllers");
const adminControllers = require("../controllers/adminControllers");
const absensiControllers = require("../controllers/absensiControllers");

const authScreet = require("../middleware/autJWT");
const multer = require("multer");
const express = require("express");
const router = express.Router();
const locationController = require("../controllers/locatoinControllers");

router.post("/check-radius", locationController.checkRadius);
router.get("/polygon", locationController.getsekolahPolygon);

// Siswa
router.get("/users", userControllers.index);
router.post(
  "/users",
  userControllers.upload.single("foto"),
  userControllers.storeUser
);
router.put(
  "/users/:id",
  userControllers.upload.single("foto"),
  userControllers.editUser
);
router.delete("/users/:id", userControllers.destroyUser);
// Kelas
router.get("/kelas", kelasControllers.index);
router.post("/kelas", kelasControllers.store);
router.put("/kelas/:id", kelasControllers.update);
router.delete("/kelas/:id", kelasControllers.destroy);

// admin
router.get("/admin", adminControllers.index);
router.post("/admin", adminControllers.store);
router.get("/admin/:id", adminControllers.getId);
router.put("/admin/:id", adminControllers.update);
router.delete("/admin/:id", adminControllers.destroy);

router.get("/absensi", absensiControllers.index);
router.post("/absensi", absensiControllers.store);
router.get("/absensi/:id", absensiControllers.getId);
router.delete("/absensi/:id", absensiControllers.destroy);

// Login
router.post("/login", userControllers.login);
router.post("/loginAdmin", adminControllers.login);
module.exports = router;
