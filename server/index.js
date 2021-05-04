const express = require("express");
const path = require("path");
const logger = require("morgan");
const dotenv = require("dotenv");
dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;

app.use(logger("dev"));
app.use(express.json());
app.use(express.static(path.join(__dirname, "..", "public")));

app.get("/", (req, res) =>
  res.sendFile(path.join(__dirname, "..", "public/index.html"))
);

app.use((req, res, next) => {
  if (path.extname(req.path).length) {
    const err = new Error("Not found");
    res.status(404);
    next(err);
  } else {
    next();
  }
});

app.use((err, req, res, next) => {
  console.error(err);
  console.error(err.stack);
  res.status(err.status || 500).send(err.message || "Internal server error.");
});

app.listen(PORT, () => {
  console.log(`serving portfolio app on ${PORT}!`);
});
