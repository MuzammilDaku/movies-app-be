var mongoose = require('mongoose')

const indianSchema = new mongoose.Schema({
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

 const Indian = new mongoose.model('Indian',indianSchema)
 module.exports = Indian
