const cv = require("opencv4nodejs");

// Cek apakah OpenCV sudah terinstall
if (!cv || !cv.getBuildInformation) {
  throw new Error("❌ OpenCV tidak terdeteksi!");
}

module.exports = cv;
