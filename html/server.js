const express = require('express')
const path = require('path')
const app = express()
 
app.use('/html',express.static(path.join(__dirname, '')))
 
app.listen(8080, () => {
  console.log('listening port 8080')
})