import express, { query } from 'express';
const app = express()
const port = 3000;
app.get("/", (req, res) => {
    res.send("Welcome to cse students");
});
app.get("/api/:name/:rollno", (req, res) => {
    try {
        const data = req.params;
        res.send(`Welcome ${data.name} and your roll.no. is ${data.rollno}`);
        // if (!name) {
        //     res.send({ status: 404, message: "Please enter your name" });
        // }
        // else {
        // }
    } catch (error) {
        console.log(error.message)
    };
});
// app.get("/api", (req, res) => {
//     // http://localhost:3000/api?name=bhanu&rollno=3001
//     try{
//         const { name, rollno } = req.query;
//         if(!name){
//             res.send({status: 404, message:"Please enter your name"});
//         }
//         else{
//             res.send(`Welcome ${name} and your roll.no. is ${rollno}`);
//         }
//     }catch(error){
//         console.log(error.message)
//     };
// });
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});