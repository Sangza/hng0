const express = require('express');
const app = express();
const retrieve = require('./route.js');
const cors = require('cors')

app.use(cors());
app.use('/', retrieve);
app.use(express.json());
app.use(express.urlencoded({}));

app.use((req, res) => {
    res.status(404).json({ error: "Route not found" });
});

const port = process.env.Port || 3000;
app.listen(port, console.log('connecting to port ', port))
