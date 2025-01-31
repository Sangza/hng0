const express = require('express');
const router = express.Router();

router.get('/', async (req, res)=>{
    const body = {
        "email": "ucheokenyidm@gmail.com",
        "current_datetime":new Date().toISOString(),
        "github_url":"https://github.com/Sangza/hng0"
    }
  res.status(200).json(body);
});

module.exports = router;
