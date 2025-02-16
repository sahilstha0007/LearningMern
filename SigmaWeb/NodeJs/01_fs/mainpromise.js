import fs from "fs/promises"


let a = await fs.readFile("sahil.txt")


let b = await fs.writeFile("sahil.txt", "\n\n\n\n\n this is sahil")
console.log(a.toString())