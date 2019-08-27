const express = require("express");
const app = express();
const path = require("path");
const Data = require('./postData');
const Data1 = require('./Data');

const users = require("./modal/user");

const mongoose = require("mongoose");
const bodyParser = require("body-parser");

app.use(express.static(path.resolve(__dirname, "../dist"))); //to set path that never be change after
//For Db Connection


mongoose.connect('mongodb://azeem:azeem@cluster0-shard-00-00-596zc.mongodb.net:27017,cluster0-shard-00-01-596zc.mongodb.net:27017,cluster0-shard-00-02-596zc.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority', {
    useNewUrlParser: true
}).then(() => console.log("DB Connected")).catch(e => console.log(e))
//Make Body Json!
app.use(bodyParser.json());
//Extend Body Object
app.use(bodyParser.urlencoded({
    extended: true
}))
//End

//Simple Post API
app.post("/users", (req, res) => {
    let userdata = {
        username: req.body.username,
        password: req.body.password,
        phoneNumber: req.body.phoneNumber
    }
    let Data = new users(userdata)
    Data.save().then(() => console.log("Data saved"))
    console.log(req.body)
})

app.get('/irfan', (req, res) => {
    res.json(Data);
});
app.get('/irfan1', (req, res) => {
    res.json(Data1);
})

app.get("/getUser",(req, res)=>{
    users.find().then(u=>{
        res.json(u)
    })
})

app.post("/delUser", (req, res)=>{
    users.findByIdAndRemove({_id:req.body.id}).then(()=>{
        users.find().then(data=>res.json(data))
    })
})
// app.get('*',(req,res)=>{
//     res.sendFile(express.static(__dirname,'../dist/index.html'))
// })
app.post("/login", (req, res) => {
    console.log(req.body)
    users.find({
        username:req.body.username,
        password:req.body.password
    }).then(resp=>{
        if(resp.length>0){
            res.json(200)
        }
        else{
            res.json(404)
        }
    }).catch(e=>console.log(e))
})
app.listen(3000, () => {
    console.log("Server is ready for running in port 3000");
});