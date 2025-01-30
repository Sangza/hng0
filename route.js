const router = express.Router();
const express = require('express');

router.get('/:retrieve', async (req, res)=>{
    const body = {
        "email": "ucheokenyidm@gmail.com",
        "current_datatime":new Date().toISOString(),
        "github_url":"<https://github.com/sangza/myrepo>"

    }

    res.send(body);
})