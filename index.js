const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000
//const io = socketIO(server);

const server = express()
  .use(express.static(path.join(__dirname, 'home')))
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))
