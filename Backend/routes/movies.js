const express = require("express");
const router = express.Router();

const { getmovies, getmovie } = require("../controllers/movies");

router.route("/").get(getmovies);
router.route("/:id").get(getmovie);
module.exports = router;
