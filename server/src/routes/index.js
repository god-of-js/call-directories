const { Router } = require("express");
const controller = require("../controllers/controller")
const router = Router();

router.get("/api/v1", controller.getTableCalls);

module.exports = router;