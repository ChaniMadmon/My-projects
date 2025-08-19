const express = require('express');
const router = express.Router();
const controllerWaterSport = require('../controller/waterSport')


router.get("/", controllerWaterSport.get);
router.delete("/:id", controllerWaterSport.deleteBag)
// router.get("/:id", controllerWaterSport.getById);
// router.post("/", controllerWaterSport.post);

module.exports = router;