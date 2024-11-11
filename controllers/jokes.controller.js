"use strict";
const model = require("../models/jokes.model");

function getCategories(req, res, next) {
    try {
        let categoryList = model.getCategories();
        res.render("categories", { categoryList: categoryList, title: "All Categories" });
        //res.json(model.getAll());
    } catch (err) {
        console.error("Error while getting jokes ", err.message);
        next(err);
    }
}

function getRandomJoke(req, res, next) {
    try {
        let randomJoke = model.getRandomJoke();
        res.render("landing", { randomJoke: randomJoke, title: "Random Joke" });
        //res.json(model.getAll());
    } catch (err) {
        console.error("Error while getting jokes ", err.message);
        next(err);
    }
}

function getJokesInCategory(req, res, next){
    try {
        let jokes = model.getJokesInCategory(req.params.id);
        console.log(jokes);
        res.render("categoryjokes", { jokes: jokes, title: "Random Joke" });
        //res.json(model.getAll());
    } catch (err) {
        console.error("Error while getting jokes ", err.message);
        next(err);
    }
}


function createNew(req, res, next) {
    let setup = req.body.setup;
    let delivery = req.body.delivery;
    let category_id = parseInt(req.body.category_id);

    if (setup, delivery, category_id) {
        let params = [setup, delivery, category_id];
        try {
            model.createNew(params);
            // res.redirect("/games/all");
            res.render("categoryjokes", { joke: model.getAll(), title: "All Jokes" });
        } catch (err) {
            console.error("Error while creating game: ", err.message);
            next(err);
        }
    }
    else {
        res.status(400).send("Invalid Request");
    }
}

module.exports = {
    getCategories,
    getRandomJoke,
    getJokesInCategory,
    createNew
};
