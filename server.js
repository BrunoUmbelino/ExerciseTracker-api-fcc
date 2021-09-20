// const express = require("express");
// const cors = require("cors");
// const https = require("https");
// const path = require("path");
// const fs = require("fs");
// require("dotenv").config();

// const app = express();
// const Routes = require("./src/Routes");

// app.use(cors());
// app.use(express.static("public"));
// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());
// app.use(Routes);

// app.get("/", (req, res) => {
//   res.sendFile(__dirname + "/views/index.html");
// });

// const sslServer = https.createServer(
//   {
//     key: fs.readFileSync(path.join(__dirname, "cert", "key.pem")),
//     cert: fs.readFileSync(path.join(__dirname, "cert", "cert.pem")),
//   },
//   app
// );

// sslServer.listen(3000, () => console.log("Secure server on port 3200"));

require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const Routes = require("./src/Routes");

app.use(cors());
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use("/public", express.static(`${process.cwd()}/public`));
app.use(Routes);

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/index.html");
});

const listener = app.listen(process.env.PORT || 3000, () => {
  console.log("Your app is listening on port " + listener.address().port);
});
