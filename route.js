const express = require("express");
const router = express.Router();

router.get("/:retrieve", async (req, res) => {
  const body = {
    email: "ucheokenyidm@gmail.com",
    current_datatime: new Date().toISOString(),
    github_url: "<https://github.com/sangza/myrepo>",
  };

  res.send(body);
  res.json(body);
});

exports.module = router;
