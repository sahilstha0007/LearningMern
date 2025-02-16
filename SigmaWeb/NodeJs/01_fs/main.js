// const { error } = require("console")
const fs = require("fs")

// // console.log(fs)

// console.log("starting")
// // fs.writeFileSync("sahil.txt","Hey i am sahil")


// fs.writeFile("sahil2.txt"," sahil is a good boy", ()=>{
//     console.log("done")
//     fs.readFile("sahil.txt", (error,data)=>{
//         console.log(error,data.toString()),

//     // again
//     fs.writeFile("sahil2.txt"," sahil is a good boy", ()=>{
//         console.log("done")
//         fs.readFile("sahil.txt", (error,data)=>{
//             console.log(error,data.toString())
//     ,
//         // again
//         },
//         fs.writeFile("sahil2.txt"," sahil is a good boy", ()=>{
//             console.log("done")
//             fs.readFile("sahil.txt", (error,data)=>{
//                 console.log(error,data.toString())
        
//             // again
//             }
//             fs.writeFile("sahil2.txt"," sahil is a good boy", ()=>{
//                 console.log("done")
//                 fs.readFile("sahil.txt", (error,data)=>{
//                     console.log(error,data.toString())
            
//                 // again
//                 }
            
    
//     }


// )
// // callback hell
// })
// console.log("ending")

fs.appendFile("sahil.txt", "sahilstha" ,(e,d)=>{
    console.log(d)
})
console.log("ending")