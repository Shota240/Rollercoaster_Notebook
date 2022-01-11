const express = require('express');
const app = express();
const mysql = require('mysql');
const cors = require('cors');
const deleted_off = 0;
const deleted_on = 1;

app.use(cors());
app.use(express.json());

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
    const is_deleted = deleted_off;

    db.query(
      "INSERT INTO coasters (name, height, speed, park, country, opened_year) VALUES (?,?,?,?,?,?)",
      [name, height, speed, park, country, opened_year, is_deleted],
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
    const is_deleted = deleted_off;
    db.query(
      "SELECT * FROM coasters WHERE is_deleted = ?",
      is_deleted ,(err, result) => {
        if (err) {
          console.log(err);
        } else {
          res.send(result);
        }
      }
    );
});

app.put('/update', (req, res) => {
    const id = req.body.id;
    const height = req.body.height;
    db.query("UPDATE coasters SET height = ? WHERE id = ?",
    [height, id], (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send(result);
        }
    })
})

app.put("/delete", (req, res) => {
  const id = req.body.id;
  const is_deleted = deleted_on;

  db.query(
    "UPDATE coasters SET is_deleted = ? WHERE id = ?",
    [is_deleted, id],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});

app.listen(3001, ()=> {
    console.log("yey, my server is running on port 3001!!!");
});
