const express = require("express");
const { InformationController } = require("../../controllers");

const router = express.Router();

router.get("/info", InformationController.info);

module.exports = router;
