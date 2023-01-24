const express = require("express")
const app = express()
const mongodb = require("mongodb")
const mongoclient = mongodb.MongoClient;
// const URL = "mongodb://localhost:27017";
const users = []
app.use(express.json())

//get all the user
// app.get("/users", (req, res) => {
//     res.json(users)
// })
// //get single user
// app.get("/user/:id", (req, res) => {
//     const index = users.findIndex(o => o.id == req.params.id)
//     res.json(users[index])
// })
//post a user
app.post("/user", async (req, res) => {
    // users.push({
    //     id: req.body.id,
    //     name: req.body.name,
    //     age: req.body.age,
    //     email: req.body.email
    console.log(req.body)
    try {
        const client = new mongodb.MongoClient("mongodb://localhost:27017")
        //connect mongodb
        // const connection = await mongoclient.connect(URL);
        await client.connect()
        const db = await client.db("first_try")

        //sellect collection
        const collection = await db.collection("users").countDocuments()

        //do opertaion
        // const operation = await collection.insertOne(req.body)
        console.log("test")
        //close collection
        await client.close()
        res.status(200).json({ message: "success" })
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: "something went wrong" })

    }
})
//edit a user
// app.put("/user/:id", (req, res) => {
//     const index = users.findIndex(o => o.id == req.params.id);
//     Object.keys(req.body).forEach((field) => {
//         users[index][field] = req.body[field]
//     });
//     res.json({ message: "done" });
// });
// //delete a user
// app.delete("/user/:id", (req, res) => {
//     const index = users.findIndex(o => o.id == req.params.id)
//     users.splice(index, 1)
//     res.json({ message: "successfully deleted" })
// })

app.listen(8000)