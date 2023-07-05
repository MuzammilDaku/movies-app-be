var mongoose = require('mongoose')

const hollywoodSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true,
        unique:true
    },
    img:{
        type:String,
        required:true,
        unique:true
    },
  
})

 const Hollywood = new mongoose.model('Hollywood',hollywoodSchema)
 module.exports = Hollywood
