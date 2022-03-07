const express = require("express");
const router = express.Router();

const { getmovies, getmovie, addmovie } = require("../controllers/movies");

router.route("/").get(getmovies);
router.route("/:id").get(getmovie);
router.route("/").post(addmovie);
module.exports = router;
