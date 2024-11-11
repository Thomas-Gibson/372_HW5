"use strict";
const express = require("express");
const router = express.Router();

const jokesController = require("../controllers/jokes.controller");

//http://localhost:3000/jokebook/categories
router.get("/categories", jokesController.getCategories);

//http://localhost:3000/jokebook/
router.get("", jokesController.getRandomJoke);

//http://localhost:3000/jokebook/category/4
router.get("/category/:id", jokesController.getJokesInCategory);

//http://localhost:3000/jokebook/joke/new
router.get("joke/new", jokesController.createNew)


module.exports = router;