const express = require("express");

const app = express();

app.get("/testNodeApp", (_req, res) => {
    res.status(200).send("Yes testNodeApp endpoint works properly and returned correct value.");
});

module.exports = app;