const app = require('./src/app')
const PORT = 33

app.listen(PORT, (err) => {
  if (err) {
    console.log(err)
  }
  console.log(`Server is running on port ${PORT}`)
})