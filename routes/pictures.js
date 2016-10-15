var express = require('express');
var router = express.Router();
var fs = require("fs");

var crypto = require("crypto");
var memories = require('../lib/memories/memorymanager');

router.get("/",function(req,res,next){
    res.render("foto");
});

router.post("/save", function(req, res, next) {
    var data = req.body.imgBase64.replace("data:image/png;base64,", "");
    var id = crypto.randomBytes(20).toString('hex');
    fs.writeFile("public/pictures/" + id + ".png", data, "base64",  function(err) {
        if(err) {
            console.log(err);
        } else {
            // Not so strict on login because of the demo :)
            var userid = -1;
            if(req.user !== undefined) userid = req.user.id;
            memories.create(id, userid, "Mijn herinnering..");
        }
    });
    res.send("ok");
});

module.exports = router;
