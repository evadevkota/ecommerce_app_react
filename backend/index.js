const DatabaseConnect = require('./db'); 
DatabaseConnect()
const express = require('express') 
const app = express()

const cors = require('cors');


app.use(cors());

const port = 4000
app.use(express.json())

app.use('/api/auth', require('./routes/auth'))
// app.use('/api/todo', require('./routes/todo'))


app.listen(port, () => {
  console.log(`hi`)
})