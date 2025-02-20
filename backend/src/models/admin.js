const koneksi = require("../config/server");
const bcrypt = require("bcryptjs");

const getAll = (callback) => {
  const q = `select * from admin`;
  koneksi.query(q, callback);
};
const getId = (id, callback) => {
  const q = `select * from admin where id=?`;
  koneksi.query(q, [id], callback);
};
const getUsername = (username, callback) => {
  const q = `select * from users where username=?`;
  koneksi.query(q, [username], callback);
};
const store = (username, name, password, no_hp, callback) => {
  const hashedpassword = bcrypt.hashSync(password, 10);
  const q = `insert into admin(username, name, password, no_hp) values(?,?,?,?)`;
  koneksi.query(q, [username, name, hashedpassword, no_hp], callback);
};

const update = (id, username, name, password, no_hp, callback) => {
  const hashedpassword = bcrypt.hashSync(password, 10);
  if (password) {
    const q = `update admin set username =?, name=?, password=?, no_hp=? where id=?`;
    koneksi.query(q, [username, name, hashedpassword, no_hp, id], callback);
  } else {
    const q = `update admin set username =?, name=?, no_hp=? where id=?`;
    koneksi.query(q, [username, name, no_hp, id], callback);
  }
};
const destroy = (id, callback) => {
  const q = `delete from admin where id=?`;
  koneksi.query(q, [id], callback);
};
module.exports = { getAll, getId, getUsername, store, update, destroy };
//    username varchar(10) UNIQUE,
//     name text,
//     password varchar(15),
//     no_hp int
