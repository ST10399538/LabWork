import express from "express";
import db from "../db/conn.mjs";
import {Objectid} from "mongodb";

const router = express.Router();


//update a record by id
router.patch("/:id", async(req,res) => {
    const query = {_id: new Objectid(req.params.id)};
    const updates = {
        $set: {
            name: req.body.name,
            comment: req.body.comment
        }
    };

    let collection = await db.collection("posts");
    let result = await collection.updateOne(query,updates);

    res.send(result).status(200);
})
//get all the records
router.get("/", async(req,res) => {
    let collection = await db.collection("posts");
    let results = await collection.find({}).toArray();
    res.send(results).status(200);
});

//create new record
router.post("/upload", async(req,res) => {
    let newDocument = {
        user: req.body.user,
        content: req.body.content,
        image: req.body.image
    };

    let collection = await db.collection("posts");
    let result = await collection.insertone(newDocument);
    res.send(result).status(204);
});