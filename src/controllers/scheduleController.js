const fs = require("fs")
//const path = require("../dev-data/schedules.json")

let schedules = JSON.parse(fs.readFileSync('data.json').toString())

console.log(schedules)

//const helper = require('../helpers/helper')



const getAllSchedules = (req, res) => {
  res.status(200).send(schedules)
}


const createSchedule = (req, res) => {
  const {
    specificDay,
    daily,
    weekly,
    interval,
    days } =
    req.body

  let newSchedule = {
    //id: Math.random().toString(32).substr(2, 9),
    date: new Date().toLocaleDateString(),
    days,
    interval
  }
  schedules.push(newSchedule)
  res.status(201).send(schedules)
  fs.writeFileSync('data.json', JSON.stringify(schedules));

}

console.log(newSchedule)

module.exports = {
  getAllSchedules,
  createSchedule

}