const express = require('express')
const router = express.Router();

const scheduleController = require('../controllers/scheduleController')

router.get('/schedule', scheduleController.getAllSchedules)

router.post("/agenda", scheduleController.createSchedule)

module.exports = router