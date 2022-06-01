const express = require('express')
const path = require('path');
const app = express()
const port = 3000

app.use(express.static(__dirname + '/pages/staticfiles'));


app.get('/', (req, res) => {
  res.sendFile( path.join(__dirname, '/pages/home.html'));
})

app.get('/wall', (req, res) => {
    res.sendFile( path.join(__dirname, '/pages/wall.html'));
})
  
  


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})