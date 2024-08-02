const express = require("express");
const router = express.Router();
const { registerUser, loginUser } = require("../controllers/user.controller");
router.use(express.json());

router.post("/register", registerUser);
router.post("/login", loginUser);

module.exports = router;
