const express = require('express');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);

const fs = require('fs');

app.get("/", (req, res) => {
    fs.readFile("index.html", (err, data) => {
        if(err) throw err;

        res.send(data.toString('utf8'));
        res.end();
    });
});

app.get("/style.css", (req, res) => {
    fs.readFile("style.css", (err, data) => {
        if(err) throw err;

        res.header("Content-Type", "text/css");
        res.send(data.toString('utf8'));1
        res.end();
    });
});

app.get("/main.js", (req, res) => {
    fs.readFile("main.js", (err, data) => {
        if(err) throw err;

        res.send(data.toString('utf8'));
        res.end();
    });
});

io.on('connection', (socket) => {
    console.log("Connected user");
});

http.listen(1337, (err) => {
    console.log("server ready");
});