var express = require('express');
var router = express.Router();

var memories = require("../lib/memories/memorymanager");

router.get("/", function(req, res, next) {
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify(memories.get()));
});

module.exports = router;
