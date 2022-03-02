"use strict";

const router = require("express").Router(),
    homeController = require("../controllers/homecontroller");

router.get("/", homeController.indexView);


module.exports = router