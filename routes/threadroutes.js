"use strict";

const router = require("express").Router(),
    threadController = require("../controllers/threadcontroller");


router.get("/:category", threadController.threadView);
router.get("/:category/new", threadController.newView);
router.post("/create", threadController.create, threadController.redirectView);

module.exports = router