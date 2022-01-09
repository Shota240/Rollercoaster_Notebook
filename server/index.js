const express = require('express');
const app = express();
const mysql = require('mysql');
const cors = require('cors');

app.use(cors());
app.use(express.json())

const db = mysql.createConnection({
    user: "root",
    host: "localhost",
    password: "password",
    database: "rcnb",
});

app.post('/create', (req, res) => {
    console.log(req.body);
    const name = req.body.name;
    const height = req.body.height;
    const speed = req.body.speed;
    const park = req.body.park;
    const country = req.body.country;
    const opened_year = req.body.opened_year;

    db.query(
        "INSERT INTO coasters (name, height, speed, park, country, opened_year) VALUES (?,?,?,?,?,?)",
        [name, height, speed, park, country, opened_year],
        (err, result) => {
            if (err) {
                console.log(err);
            } else {
                res.send("Values Inserted");
            }
        }
    );
})

app.get('/coasters', (req, res) => {
    db.query("SELECT * FROM coasters", (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send(result);
        }
    });
});

app.listen(3001, ()=> {
    console.log("yey, my server is running on port 3001!!!");
});
