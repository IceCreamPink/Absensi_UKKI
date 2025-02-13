const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const migration = require("./migrations/migrations");
const router = require("./routers/router.js");

const app = express();
const port = 3000;

migration();
app.use(bodyParser.json());
app.use("/api", router);

app.listen(port, () => {
  console.log("-------------------------");
  console.log(`berhasil berjalan di port${port}`);
  console.log("-------------------------");
});
