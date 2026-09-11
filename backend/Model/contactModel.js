const mongoose = require("mongoose")

const ContectShema = mongoose.Schema({
    Name:{
        type: String,
        required: true
    },
    Email:{
        type: String,
        required: true
    },
    phone:{
        type: Number,
        required: true
    },
    message:{
        type: String,
        required: true
    }
})
module.exports = mongoose.model("contect", ContectShema)
