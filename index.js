const express = require("express");
const app = express();

app.use(express.json());
app.use(express.urlencoded({}));

const port = process.env.Port || 3000;
app.listen(port, console.log("connecting to port 3030", port));
