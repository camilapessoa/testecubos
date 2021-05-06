const express = require("express")
const router = express.Router()

router.get("/", (req, res) => {
  res.status(200).json({
    "title": "Agenda API",
    "version": "1.0.0",
    "message": "Welcome"
  })
})

module.exports = router