
const express = require('express')
const app = express()
const port = 3000


// app.get or app.post or  app.put or app.delete(path,handler)
app.get('/', (req, res) => {
    res.send('Hello World! 2')
})

app.get("/about", (req, res)=>{
    res.send("About us")
})

app.get("/contact", (req, res) => {
    res.send("Hello contact me!")
})


app.get("/blog", (req,res)=>{
    res.send("Heyy this is blog")
})


//        parameters
app.get("/blog/:slug",(req, res)=>{
    //logic to fetch intro to python from the db
    res.send(`Hey ${req.params.slug}`)
})
// req.params... slug | second


// app.get("/blog/intro-to-python",(req, res)=>{
//     //logic to fetch intro to python from the db
//     res.send("Hey this is intro to python")
// })

// app.get("/blog/intro-to-blender", (req,res)=>{
//     //logic to fetch intro to blender from the db
//     res.send("Heyy i think this is intro to blender")
// })


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
