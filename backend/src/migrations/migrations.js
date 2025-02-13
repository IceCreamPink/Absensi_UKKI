const mysql = require("mysql2");
const query = require("express");
const koneksi = require("../models/server");
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
    no_hp int
    ) `;
  koneksi.query(q, (err, result) => {
    if (err) {
      console.error("Error table admin", err.stack);
    }
    console.log("Table admin berhasil dibuat");
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

        const koneksi = require("../models/server");
        createKelas(koneksi);
        createUsers(koneksi);
        createAdmin(koneksi);
        konekmysql.end();
      }
    );
  });
};
module.exports = migrations;
