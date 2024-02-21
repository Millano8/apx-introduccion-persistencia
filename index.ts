import { firestore } from "./db";
const express = require('express')
const bodyParser = require('body-parser')

const app = express()
app.use(bodyParser.json())
const port = 3000

const usersCollections = firestore.collection('users')

app.get("/users",function(req,res){
    res.json(["todos los usuarios"])
})

app.get("/users/:id",function(req,res){
    const userId = req.params.id
    const userDoc = usersCollections.doc(userId)
    userDoc.get().then(userSnap=>{
        const userData = userSnap.data()
        res.json(userData)
    })
})

app.post("/users",function(req,res){
    const newUser = usersCollections.doc()
    newUser.create(req.body).then(()=>{
        res.json({
        id: newUser.id
    })
    })
    
})

app.patch("/users/:id",function(req,res){
    const userId = req.params.id
    const userDoc = usersCollections.doc(userId)
    const updateObject = req.body
    updateObject.updatedAd = new Date()

    userDoc.update(updateObject).then(()=>{
        res.json({
            message: "ok"
        })
    })
})


app.listen(port,()=>{
    console.log("example add listening at port 3000")
})


