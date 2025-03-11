const fs = require("fs")

console.log(fs)

console.log("starting")
// fs.writeFileSync("Manpreet.txt", "Manpreet is good")  // This is note good as javascript is asynchronous


// This is an example of callback hell
fs.writeFile("Manpreet.txt", "Manpreet is good", () => {
  console.log("done")
  fs.readFile("Manpreet.txt", (error, data) => {
    console.log(error, data.toString())
  })
})

fs.appendFile("Manpreet.txt", "Manpreet is good", (e,d) => {
  console.log("d")
})
console.log("ending")