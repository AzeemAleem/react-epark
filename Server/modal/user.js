
const mongoose = require("mongoose");
const schema = mongoose.Schema;
const userDetail = new schema({
    username : String,
    password : String,
    phoneNumber : Number,
    role: {type:String, default:"user"}
})
module.exports = mongoose.model("userDetail",userDetail);