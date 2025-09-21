import https from "https";
import fs from "fs";
import app from "./app.mjs";
import express from "express";
//set the port
const PORT = 3000;
const app = express();
const urlprefix = '/api';


const server = https.createServer({
    key: fs.readFileSync('keys/privatekey.pem'),
    cert: fs.readFileSync('keys/certificate.pem')
},app)

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