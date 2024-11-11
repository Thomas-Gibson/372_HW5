"use strict";
const db = require("./db-conn");

function getCategories(){
    let sql = "SELECT * FROM categories;"
    const data = db.all(sql);
    return data;
}


function getRandomJoke() {
    let sql = "SELECT * FROM jokes ORDER BY RANDOM() LIMIT 1;"
    const data = db.all(sql);
    return data;
}

function getJokesInCategory(value){
    console.log(value);
    let sql = "SELECT * FROM jokes WHERE jokes.category_id =?"
    const data = db.all(sql, value);
    return data;
}

function createNew(params) {
    let sql = "INSERT INTO jokes " +
        "(setup, delivery, category_id) " +
        "VALUES(?, ?, ?)";
    const info = db.run(sql, params);
    return info;
}

module.exports = {
    getCategories,
    getRandomJoke,
    getJokesInCategory,
    createNew
};
