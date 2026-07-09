const express = required("express");

const app = express();

app.get("/", (req, res) => {
    res.send("Welcome to Cassi's Health");
});
