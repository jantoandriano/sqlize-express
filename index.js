const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const adminRoutes = require("./routes/admin/index");
const blogRoutes = require("./routes/blog/index");
const app = express();
const port = process.env.PORT || 3100;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

app.use("/admins", adminRoutes);
app.use("/blogs", blogRoutes);

app.get("/", (req, res, next) => {
  res.send(`<h1>hello ayam kampus</h1>`);
});

app.listen(port, console.log(`Connected to database http://localhost/${port}`));
