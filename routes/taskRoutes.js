const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    console.log("GET /tasks hit");
    res.json({ message: "GET works" });
});

router.post("/", (req, res) => {
    console.log("POST /tasks hit");
    res.json({ message: "POST works" });
});

module.exports = router;