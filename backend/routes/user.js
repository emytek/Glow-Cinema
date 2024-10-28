const express = require('express');
const { create } = require('../controllers/users');
const { userValidtor, validate } = require("../middlewares/validator");

const router = express.Router();

router.post("/create", userValidtor, validate, create);

module.exports = router;