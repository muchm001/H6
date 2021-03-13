const express = require('express')
const app = express()
const mysql = /dbcon.js


app.use(express.static('public'))
app.use(express.json())
app.set("port",42560)

//queries

const getAllQuery = 'SELECT * FROM workouts'
const insertQuery = ""
const updateQuery = ""
const deleteQuery = ""

const deleteTableQuery = "DROP TABLE IF EXISTS workouts"
const createTableQuery = "CREATE TABLE workouts(id INT PRIMARY KEY AUTO_INCREMENT," +
    "name VARCHAR(255) NOT NULL," +
    "reps INT," +
    "weight INT," +
    "unit BOOLEAN," +
    "date DATE)"


app.get("/reset-table",  (req, res, next) => {
    mysql.pool.query(deleteTableQuery, (err) => {
        mysql.pool.query(createTableQuery,(err) => {
            res.send("${tableName} table reset")
        })
    })
})

app.use(function (req, res) {
    res.status(404);
    res.send("404");

});

app.use(function (err, req, res, next) {
    console.error(err.stack);
    res.status(500);
    res.send("500")

});