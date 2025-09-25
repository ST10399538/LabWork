import https from "https";
import http from "http";
import fs from "fs";
import posts from "./routes/post.mjs";
import users from "./routes/user.mjs";
import app from "./app.mjs";
import express from "express";
import cors from "cors"
//set the port
const PORT = 3000;
const app = express();

//const urlprefix = '/api';

const options = {
    key: fs.readFileSync('keys/privatekey.pem'),
    cert: fs.readFileSync('keys/certificate.pem')
}

app.use(cors());
app.use(express.json());

app.use((reg, res,next) =>
{
    res.setHeader('Access-Control-Allow-Origin','*');
    res.setHeader('Access-Control-Allow-Headers','*');
    res.setHeader('Access-Control-Allow-Methods','*');
})

app.use("/post", posts);
app.route("/post", posts);
app.use("/user, users");
app.route("/user", users);

let server = https.createServer(options,app)
console.log(PORT)
server.listen(PORT);
// const server = https.createServer({
//     key: fs.readFileSync('keys/privatekey.pem'),
//     cert: fs.readFileSync('keys/certificate.pem')
// },app)

// app.use(express.json());

// app.get(urlprefix + '/', (req, res) => {
//     res.send('I am finally figuring this out, no more crying')
// })

// app.get(urlprefix + '/orders', (req,res) => {
//     const orders = [
//         {
//             id: "1",
//             name: "Orange"
//         },
//         {
//             id: "2",
//             name: "Apple"
//         },
//         {
//             id: "3",
//             name: "Pear"
//         }
//     ]
//     res.json(
//         {
//             message: "Fruits",
//             orders: orders
//         }
//     )
// })



// app.listen(PORT)
server.listen(PORT)