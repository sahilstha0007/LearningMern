const http = require("http")
const fs = require("fs")

const myserver = http.createServer((req, res) => {
  const log = `${Date.now()}: New Req Received \n`;
  fs.appendFile('log.txt', log, (err, data) => {
    res.end("HEllo From Server Again")

  });
});
myserver.listen(8000, () => console.log("Server Started!"));


// const express = require('express')
// const app = express()
// const port = 3000

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`)
// })

// const http = require("http")
// const fs = require("fs")
// const myServer = http.createServer((req, res)=>{  
//   const log = `${Date.now()}: New Req Received \n`;
//   fs.appendFile("log.txt", (err,data)=>{
//     res.end("HEllo From Server Again")
//   })
// })
// myServer.listen(8000,()=>console.log("Server Started"))