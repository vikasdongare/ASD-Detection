const connectToMongo = require('./dbConnection')
const express = require('express')
const cors = require('cors');
const app = express()
const port = 5000

connectToMongo();
app.use(cors());
app.use(express.json())
app.use('/auth', require('./routes/auth'))
app.use('/profile', require('./routes/profile'))
app.use('/report', require('./routes/report'))
app.use('/history', require('./routes/history'))
app.use('/uploads', express.static('uploads'))
app.use('/model', express.static('assests/model'))

app.listen(port, () => {
  console.log(`ASD app listening on port ${port}`)
})