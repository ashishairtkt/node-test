const express = require("express");
const app = express();

const routes = require("./routes");

app.use("/api", routes);

const PORT = process.env.PORT || 4000;
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});

module.exports = app;
