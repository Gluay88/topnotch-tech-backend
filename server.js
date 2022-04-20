const express = require("express");
const app = express();

var dbconnection = require("./db");
var productsRoute = require("./routes/productsRoute");

app.use("/api/products/", productsRoute);

app.get("/", (req, res) => {
  res.send("Backend says Hello!!! PORT 8000");
});

// const port = process.env.PORT || 5000
// app.listen(port, () => `Server running on port ${port}`)
const port = 8000;
app.listen(port, () => console.log(`Node JS Server Started on ${port}`));
