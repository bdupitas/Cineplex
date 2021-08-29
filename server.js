const express = require("express");
const app = express();
const path = require("path");

// listens for certain ports
const port = (process.env.PORT || '3000');

app.use(express.static(path.join(__dirname, "frontend/build")));
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "frontend/build", "index.html"));
});

app.get("/video", (req, res) => {
  res.send("Hello from Video Router")
});

app.listen(port, () => {
  console.log(`Cineplex Listening from port ${port}`);
});
