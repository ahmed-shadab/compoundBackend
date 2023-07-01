const express = require("express");
const router = express.Router();
const controller = require("../controller/compound");
router.get("/compound", controller.getCompounds);
router.get("/compound/:id", controller.getCompoundById);
router.patch("/compound", controller.updateCompound);
module.exports = router;
