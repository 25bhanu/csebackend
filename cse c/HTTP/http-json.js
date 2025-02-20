const http = require('http');
const users = [{id: 2, name: "Bhanu", email:"bhanu@example.com"},
    {
        id: 3, name: "aditya", email:"aadi@example.com"
    },
    {
        id: 4, name: "harsh", email:"harsh@example.com"
    }]
const server = http.createServer((req, res) => {
    res.writeHead(200, {"content-type": "application/json"});
    const namedata = users.map((user) => {
        return user.name
    })
    res.end(JSON.stringify(namedata));
});

const port = 3000;
server.listen(port, ()=>{
    console.log(`Server is running on port http://localhost:${port}`);
});