const express = require('express');
const router = express.Router();

router.get('/', async (req, res)=>{
    const body = {
        "email": "ucheokenyidm@gmail.com",
        "current_datatime":new Date().toISOString(),
        "github_url":"<https://github.com/Sangza/hng0>"
    }
  res.send(body);
});

module.exports = router;
