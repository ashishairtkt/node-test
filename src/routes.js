const express = require("express");
const router = express.Router();

// Example route
router.get("/todo", (req, res) => {
  res.json({ message: "todo API is running" });
});

module.exports = router;
