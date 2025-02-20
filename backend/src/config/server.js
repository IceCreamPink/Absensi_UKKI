// const mongoose = require("mongoose")
const mysql = require("mysql2");
const koneksi = mysql.createConnection({
  host: "localhost",
  user: "IceCreamPink",
  password: "admin123",
  database: "UKK_absensi",
});

koneksi.connect((err) => {
  if (err) {
    console.error("Error koneksi ke database");
    return;
  }
  console.log("-------------------------");
  console.log(`Berhasil konek ke database`);
  console.log("-------------------------");
});
module.exports = koneksi;
