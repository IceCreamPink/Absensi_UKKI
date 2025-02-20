const mysql = require("mysql2");
const query = require("express");
const koneksi = require("../config/server");
const konekmysql = mysql.createConnection({
  host: "localhost",
  user: "IceCreamPink",
  password: "admin123",
});

const createUsers = (koneksi) => {
  const q = `create table if not exists users(
    id int auto_increment primary key,
    nis VARCHAR(20) UNIQUE,
    nama TEXT,
    password varchar(100),
    id_kelas VARCHAR(6),
    path VARCHAR(259),
    create_at datetime default current_timestamp
    )`;
  koneksi.query(q, (err, result) => {
    if (err) {
      console.error("Error table users", err.stack);
    }
    console.log("Table users berhasil dibuat");
  });
};
const createAbsensi = (koneksi) => {
  const q = `create table if not exists absensi(
    id int auto_increment primary key,
    id_siswa INT,
    waktu TIME,
    lokasi VARCHAR(10000),
    status enum('hadir', 'sakit', 'alpa', 'ijin'),
    foto_absensi varchar(255),
    create_at datetime default current_timestamp
    )`;
  koneksi.query(q, (err, result) => {
    if (err) {
      console.error("Error table absensi", err.stack);
    }
    console.log("Table absensi berhasil dibuat");
  });
};

const createKelas = (koneksi) => {
  const q = `create table if not exists kelas(
    id int auto_increment primary key,
    kelas VARCHAR(15),
    nama_wali TEXT,
    tahun date,
    create_at datetime default current_timestamp
    )`;
  koneksi.query(q, (err, result) => {
    if (err) {
      console.error("Error table kelas", err.stack);
    }
    console.log("Table kelas berhasil dibuat");
  });
};

const createAdmin = (koneksi) => {
  const q = `create table if not exists admin(
    id int auto_increment primary key,
    username varchar(10) UNIQUE,
    name text,
    password varchar(100),
    no_hp varchar(13)
    ) `;
  koneksi.query(q, (err, result) => {
    if (err) {
      console.error("Error table admin", err.stack);
    }
    console.log("Table admin berhasil dibuat");
  });
};
const createSekolah = (koneksi) => {
  const q = `create table if not exists sekolah(
  id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255), 
    latitude DECIMAL(10, 8), 
    longitude DECIMAL(11, 8),
    radius INT 
  )`;
  koneksi.query(q, (err, result) => {
    if (err) {
      console.error("Error koneksi ke table sekolah", err.stack);
    }
    console.log("Table sekolah berhasil dibuat");
  });
};

const migrations = () => {
  konekmysql.connect((err) => {
    if (err) {
      console.error("Error koneksi ke database", err.stack);
      return;
    }
    console.log("berhasil konek ke mysql");

    konekmysql.query(
      "create database if not exists UKK_absensi",
      (err, result) => {
        if (err) {
          console.error("error koneksi ke database", err.stack);
        }
        console.log("databases berhasil dibuat");

        const koneksi = require("../config/server");
        createKelas(koneksi);
        createUsers(koneksi);
        createAbsensi(koneksi);
        createAdmin(koneksi);
        createSekolah(koneksi);
        konekmysql.end();
      }
    );
  });
};
module.exports = migrations;
