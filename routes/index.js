"use strict";

const router = require("express").Router(),
    homeRoutes = require("./homeroutes"),
    threadRoutes = require("./threadroutes");

router.use("/", homeRoutes);
router.use("/threads", threadRoutes);

module.exports = router;