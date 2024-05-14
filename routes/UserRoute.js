const express = require("express");
const { get, update, create, login, list } = require("../controllers/User.controller");
const { authenticate } = require("../middleware/authenticate");

const router = express.Router();

router.get("/list", authenticate, list)
router.get("/:id", authenticate, get)
router.put("/:id", authenticate, update)
router.post("", create)
router.post("/login", login)


module.exports = router