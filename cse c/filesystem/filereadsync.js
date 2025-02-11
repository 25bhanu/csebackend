const fs = require("fs");
// fs.writeFileSync("./data1.txt", "Hello ABES", "utf-8");
// fs.writeFileSync("./data2.txt", "Hello ABESec" , "utf-8");
// fs.appendFileSync("./data1.txt", "Students", "utf-8");

// fs.renameSync("./data1.txt", "./data3.txt" , "utf-8");
// fs.unlinkSync("./data3.txt" , "utf-8");
const data = fs.readFileSync("./data.txt", "utf-8");
console.log(data)
if(data.match("H")){
    console.log("File contians 'H'");
    const newdata = data.replace("H", "ABES");
    fs.writeFileSync("./data.txt", newdata, "utf-8");
}




// const data = fs.readFileSync("./data.txt","utf-8");
// console.log(data.toString)
// console.log(data)
