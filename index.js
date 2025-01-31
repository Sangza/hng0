const app = express();
const express = require('express');

app.use(cors());
app.use('/', retrieve);
app.use(express.json());
app.use(express.urlencoded({}));

const port = process.env.Port || 3000;
app.listen(port, console.log('connecting to port 3030', port))