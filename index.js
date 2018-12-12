const express = require('express');
const path = require('path');

const app = express();

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));

// Code to initialize and populate database
// var db = new sqlite3.Database('./database.db');
// db.serialize(function() {
// 	db.run("CREATE TABLE table (label TEXT)");
// 	const query = `INSERT INTO table VALUES(?)`;
// 	db.run(query, 'Todo 1');
// 	db.run(query, 'Todo 2');
// 	db.run(query, 'Todo 3');
// 	db.each(`SELECT rowid as id, label FROM table`, function(err, row) {
// 		console.log(row.id, row.label);
// 	});
// db.close();

// Put all API endpoints under '/api'
app.get('/api/data', (req, res) => {
  const data = [Math.random(), Math.random()];
  res.json(data);
});

// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname+'/client/build/index.html'));
});

const port = process.env.PORT || 5000;
app.listen(port);
